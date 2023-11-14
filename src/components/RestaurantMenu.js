import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { RES_IMAGE_API } from "./utils/constants";
import { DISH_API } from "./utils/constants";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    cloudinaryImageId,
    avgRating,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("DEVVVVV",category);

  const avgRatingFunc = () => {
    if (avgRating >= 4) {
      return "bg-green-500 text-white rounded-lg w-14";
    } else {
      return "bg-red-500 text-white rounded-lg w-14";
    }
  };

  const handleCart = (cartInfo) => {
    console.log(cartInfo);
  };
  return (
    <div className="outer-container w-full">
      <div className="banner w-full h-40 mb-4 bg-black flex justify-center items-center">
        <div className="res-image w-64">
          <img
            className="w-64 h-32 rounded-sm"
            src={RES_IMAGE_API + cloudinaryImageId}
          />
        </div>
        <div className="res-info  w-1/3 ml-8 h-32 ">
          <div className="res-name w-full h-12">
            <p className="text-xl text-white font-semibold">{name}</p>
          </div>
          <div className="cuisines-des w-full mb-4">
            <p className=" text-gray-400 text-lg">{cuisines?.join(" , ")}</p>
          </div>
          <div className="other-des flex justify-between">
            <div className="avg-rating  text-gray-400 text-lg">
              <p className={avgRatingFunc()}>
                <i className="fa-solid fa-star"></i>
                {avgRating}
              </p>
            </div>
            <div className="delivery-time  text-gray-400 text-lg">
              <p>
                {sla.minDeliveryTime} <span>MINS</span>{" "}
              </p>
            </div>
            <div className="delivery-time  text-gray-400 text-lg">
              <p>{costForTwoMessage}</p>
            </div>
            <div className="total-rating  text-gray-400 text-lg">
              <p>{totalRatingsString}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Categories Accordian  */}
      <div className="menu-container w-full flex justify-center items-center">
        <div className="menu-info w-7/12">
         {category.map((c)=> <RestaurantCategory key={c.card.card.title} cards = {c.card.card}/>)}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
