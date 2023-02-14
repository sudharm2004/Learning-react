import { useParams } from "react-router-dom";
import { RESTAURANTCARD_IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import Menu from './Menu';
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { id } = useParams();
 const Restaurant=useRestaurantDetails(id);

  if (Restaurant == null) return <Shimmer />;

  return (
    <div className="RestaurantDetails">
      <div>
        <img
          className="restaurantcard-img"
          src={RESTAURANTCARD_IMG_CDN + Restaurant?.data?.cloudinaryImageId}
          alt="restaurantLogo"
          style={{ width: "203px" }}
        />
        <br />
        <h1 style={{ display: "inline" }}>{Restaurant?.data?.name}</h1>,
        {Restaurant?.data?.area}
      </div>
      
      <div className="Menu">
        <h2>Menu</h2>
        {Object.values(Restaurant?.data?.menu?.items).map((element) => {
          return (
            <Menu key={element?.id} menu={element}/>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
