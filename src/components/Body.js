import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
// import resList from "./utils/mockData";
import Shimmer from "./shimmer";

const Body = () => {
  // const listsOfResArray =
  //   resList[0].data.success.cards[1].gridWidget.gridElements.infoWithStyle
  //     .restaurants;

  // const listsofRes = listsOfResArray.map((elems) => {
  //   return elems.info;
  // });
  const [listofResturants, setlistofResturants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
    const json = await data.json();
    console.log(json.data);
    const dev =
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;

    const resArray = dev.map((elemt) => {
      return elemt.info;
    });
    setlistofResturants(resArray);
  };

  if (listofResturants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div
        className="
        filter"
      >
        <button
          className="filter-btn"
          onClick={() => {
            const filterLists = listofResturants.filter((res) => {
              return res.avgRating > 4.1;
            });
            console.log(filterLists);
            setlistofResturants(filterLists);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Resturant Cards */}
        {listofResturants.map((restaurant) => (
          <ResturantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
