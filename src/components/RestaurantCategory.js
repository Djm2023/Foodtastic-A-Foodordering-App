import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ cards }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {setShowItems(!showItems)};
  return (
    <div className="item-container w-full shadow-lg">
      <div
        className="item-card w-full flex justify-between h-16 mt-4 mb-3"
        onClick={handleClick}
      >
        {/* Header */}
        <span className="font-bold text-lg font-serif my-auto w-full h-full mt-5 ml-3">
          {cards.title} &nbsp; ({cards.itemCards.length})
        </span>
        <span className="my-auto text-lg">
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>
      {/* Accordian  */}
      {showItems && <ItemList items={cards.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
