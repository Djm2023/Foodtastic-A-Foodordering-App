import { DISH_API } from "./utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="itemcard-container w-full border-y-2">
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="main-container-item w-full h-40 flex border-y-2"
        >
          <div className="itemcards-container  w-10/12">
            <div className="name font-bold text-md mt-2 ml-3">{items.card.info.name}</div>
            <div className="price pl-3 pt-3 text-gray-600">
              <span>Rs.</span>
              {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
            </div>
            <div className="description text-xs text-gray-600 pl-3 pt-3 ">{items.card.info.description}</div>
          </div>
          <div className="image-container w-3/12">
            <img className="w-10/12 h-28 rounded-md pt-2 ml-4" src={DISH_API + items.card.info.imageId}/>
            <button className="bg-gold pt-1 pb-1 px-5 mt-1 ml-14 rounded-md text-white">Add<span className="pl-2"><i className="fa-solid fa-plus"></i></span></button>
          </div>
        </div>
       
      ))}
    </div>
  );
};

export default ItemList;
