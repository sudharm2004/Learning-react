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
  if (props.cards === "fetch error") {
    return (
      <div className=" my-3 flex w-full flex-wrap justify-center text-2xl font-bold">
        Oops!Looks like we were not able to fetch the data may anyone of the
        following had happened
        <ol className="space-y-3 text-lg font-bold">
          <li>
            Location access denied:- May be you have denied access to access the
            location
          </li>
          <li>
            CORS ERROR:-I am using swiggy public api for the fetching data and
            due to CORS error the request must have been not resolved
          </li>
          <li>
            Network ERROR:-May be due to Network we were not able to fetch the
            data
          </li>
          <li>
            Server ERROR:-It looks like there was a problem fetching the data.
            This may be due to a server issue. Please try again later or contact
            suppor
          </li>
        </ol>
      </div>
    );
  }

  return (
    <div
      data-testid="restaurant-list"
      className=" my-3 flex w-full flex-wrap justify-center"
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
