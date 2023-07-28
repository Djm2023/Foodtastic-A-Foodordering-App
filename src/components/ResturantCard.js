import { IMAGE_URL } from "./utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = resData;
  return (
    <div className="res-cards">
      <div className="card">
        <img src={IMAGE_URL + cloudinaryImageId} />
        <p id="name">{name}</p>
        <p id="cuisines">{cuisines.join(", ")}</p>

        <div className="res-details">
          <ul>
            <li id="rating">{avgRating} Stars</li>
            <li> {sla.deliveryTime} MINS</li>
            <li>{costForTwo}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
