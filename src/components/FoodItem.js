import { useContext } from "react";
import UserContext from "../utils/Usercontext";
import { RESTAURANTCARD_IMG_CDN } from "../config";

const FoodItem = ({
  name,
  cuisines,
  maxDeliveryTime,
  cloudinaryImageId,
  avgRating,
  veg,
  costForTwoString,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  const ratingBg = veg ? "green" : "red";
  return (
    <div className="Food-item m-2 flex h-full w-64 flex-col space-y-1 break-words rounded-md border-2 p-3 hover:shadow-lg">
      <img
        className="w-full"
        src={RESTAURANTCARD_IMG_CDN + cloudinaryImageId}
        alt="restaurantLogo"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <span className="flex-grow text-sm">{cuisines.join(",")}</span>
      <div className="flex justify-between font-bold">
        <div
          className="rounded-md bg-green-700 p-1 text-sm  text-white"
          style={{ background: ratingBg }}
        >
          <i className="fa-solid fa-star"></i>
          {avgRating == "--" ? "0.0" : avgRating}
        </div>
        <span>{lastMileTravelString}</span>
        <span>{costForTwoString}</span>
      </div>
      {/* <h4>{user.name}</h4> */}
    </div>
  );
};

export default FoodItem;
