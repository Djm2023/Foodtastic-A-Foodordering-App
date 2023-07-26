import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "./utils/mockData";

const Body = () => {
  const [listofResturants, setlistofResturants] = useState(resList);
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
              // console.log(res.data.avgRating);
              return res.data.avgRating > 4.3;
            });
            console.log(filterLists);
            setlistofResturants(filterLists);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {/* Resturant Cards */}
        {listofResturants.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
