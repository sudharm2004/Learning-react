import { useContext } from "react";
import UserContext from "../utils/Usercontext";
import { RESTAURANTCARD_IMG_CDN } from "../config";

const FoodItem = ({ name, cuisines, maxDeliveryTime, cloudinaryImageId }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="Food-item m-2 flex h-full w-64 flex-col space-y-1 break-words rounded-md border-2 p-3 hover:shadow-lg">
      <img
        className="w-full"
        src={RESTAURANTCARD_IMG_CDN + cloudinaryImageId}
        alt="restaurantLogo"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <span className="flex-grow text-sm">{cuisines.join(",")}</span>
      <h5 className="flex-grow">max delivery time:- {maxDeliveryTime}</h5>
      <h4>{user.name}</h4>
    </div>
  );
};

export default FoodItem;