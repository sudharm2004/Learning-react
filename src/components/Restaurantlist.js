import { RESTAURANTCARD_IMG_CDN } from "../config";
import { Link } from "react-router-dom";

const Restaurantcard = ({
  name,
  cuisines,
  maxDeliveryTime,
  cloudinaryImageId,
}) => {
  return (
    <div className="m-2 flex h-full w-52 flex-col space-y-1 break-words rounded-md border-2 p-3 hover:shadow-lg">
      <img
        className="w-full"
        src={RESTAURANTCARD_IMG_CDN + cloudinaryImageId}
        alt="restaurantLogo"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <span className="flex-grow text-sm">{cuisines.join(",")}</span>
      <h5 className="flex-grow">max delivery time:- {maxDeliveryTime}</h5>
    </div>
  );
};

const Restaurantlist = (props) => {
  return (
    <div className="m-3 flex flex-wrap">
      {props.cards.map((restaurant) => {
        return (
          <Link
            className="flex-grow p-2"
            to={"/restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <Restaurantcard {...restaurant.data} />
          </Link>
        );
      })}
    </div>
  );
};

export default Restaurantlist;
