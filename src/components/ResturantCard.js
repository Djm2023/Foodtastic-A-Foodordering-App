import { IMAGE_URL } from "./utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const {
      name,
      cuisines,
      avgRating,
      deliveryTime,
      costForTwo,
      cloudinaryImageId,
    } = resData?.data;
    return (
      <div className="res-cards">
        <div className="card">
          <img
            src={
              IMAGE_URL + cloudinaryImageId
            }
          />
          <p id="name">{name}</p>
          <p id="cuisines">{cuisines.join(", ")}</p>
  
          <div className="res-details">
            <ul>
              <li id="rating">{avgRating} Stars</li>
              <li> {deliveryTime} MINS</li>
              <li>Rs:{costForTwo / 100} FOR TWO</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default ResturantCard;