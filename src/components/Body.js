import ResturantCard, { withDiscountLabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [listofResturants, setlistofResturants] = useState([]);

  const [searchText, setSearchtext] = useState("");

  const [filteredRes, setFilteredRes] = useState("");

  const RestaurantCardDiscount = withDiscountLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
    const dev =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    if (dev == undefined) {
      console.log("undefined part");
      const dev =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const resArray = dev?.map((elemt) => {
        return elemt.info;
      });
      setlistofResturants(resArray);
      setFilteredRes(resArray);
    } else {
      console.log("Normal part");
      const resArray = dev?.map((elemt) => {
        return elemt.info;
      });
      setlistofResturants(resArray);
      setFilteredRes(resArray);
    }
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>It's seems you are offline....Turn on your internet connection.</h1>
    );

  if (listofResturants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container w-full ">
      <div
        className="
        filter flex justify-center items-center w-full mb-4 "
      >
        <div className="search h-12 w-1/3 flex justify-center border-2 border-grey-500 rounded-lg">
          <input
            className="w-80 mr-14 border-0 outline-0 pl-6"
            type="text"
            placeholder=" Search Restaurant Name ..."
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className=" px-10 rounded-md bg-gold text-white ml-2"
            type="submit"
            onClick={() => {
              const filterSearch = listofResturants?.filter((filteredRes) => {
                return filteredRes.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRes(filterSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn w-1/10 ml-6 px-6 pt-3 pb-3 text-white bg-gold rounded-lg"
          onClick={() => {
            const filterLists = listofResturants?.filter((res) => {
              return res.avgRating > 4.5;
            });
            // console.log(filterLists);
            setFilteredRes(filterLists);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {/* Resturant Cards */}
        {filteredRes?.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
            {restaurant.aggregatedDiscountInfoV3 ? (
              <RestaurantCardDiscount resData={restaurant} />
            ) : (
              <ResturantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
