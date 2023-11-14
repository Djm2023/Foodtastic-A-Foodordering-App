import { IMAGE_URL } from "./utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;

  const avgRatingFunc = () => {
    if (avgRating >= 4) {
      return "mr-6 ml-2 border-2 w-12 h-7 rounded-lg bg-green-500 text-white";
    } else {
      return "mr-6 ml-2 border-2 w-12 h-7 rounded-lg bg-red-500 text-white";
    }
  };

  return (
    <div className="res-cards w-80 h-80 flex justify-center flex-wrap">
      <div className="card w-64 mt-auto rounded-lg shadow-2xl">
        <img
          className="w-60 mx-auto rounded-sm"
          src={IMAGE_URL + cloudinaryImageId}
        />
        <p id="name" className="w-full text-lg pl-2 ">
          {name}
        </p>
        <p
          id="cuisines"
          className="w-full h-14 overflow-hidden text-grey pl-2 text-xs"
        >
          {cuisines.join(", ")}
        </p>

        <div className="res-details flex w-full h-12 ">
          <ul className="flex justify-evenly">
            <li id="rating" className={avgRatingFunc()}>
              <span> </span>
              <i className="fa-solid fa-star"></i>
              <span> </span>
              {avgRating}
            </li>
            <li className="mr-4"> {sla.deliveryTime} MINS</li>
            <li>{costForTwo}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const withDiscountLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mt-7 text-white font-serif rounded-lg z-100 ml-4 bg-gold shadow-lg w-1/12 pt-1.5 pb-1.5 pl-6">
          {props.resData.aggregatedDiscountInfoV3.header}
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
