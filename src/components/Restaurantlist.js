import { Link } from "react-router-dom";

import FoodItem from "./FoodItem";

// const Restaurantcard = ({
//   name,
//   cuisines,
//   maxDeliveryTime,
//   cloudinaryImageId,
// }) => {
//   const { user } = useContext(UserContext);
//   return (
//     <div className="Restaurant-list m-2 flex h-full w-64 flex-col space-y-1 break-words rounded-md border-2 p-3 hover:shadow-lg">
//       <img
//         className="w-full"
//         src={RESTAURANTCARD_IMG_CDN + cloudinaryImageId}
//         alt="restaurantLogo"
//       />
//       <h2 className="text-lg font-bold">{name}</h2>
//       <span className="flex-grow text-sm">{cuisines.join(",")}</span>
//       <h5 className="flex-grow">max delivery time:- {maxDeliveryTime}</h5>
//       <h4>{user.name}</h4>
//     </div>
//   );
// };

const Restaurantlist = (props) => {
  return (
    <div
      data-testid="restaurant-list"
      className=" my-3 flex flex-wrap justify-center"
    >
      {props.cards.map((restaurant) => {
        return (
          <Link
            className="p-2"
            to={"/restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <FoodItem {...restaurant.data} />
          </Link>
        );
      })}
    </div>
  );
};

export default Restaurantlist;
