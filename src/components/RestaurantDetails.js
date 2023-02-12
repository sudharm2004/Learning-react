import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANTCARD_IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import Menu from './Menu';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [Restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=18.6248966&lng=73.8566087&menuId=" +
        id
    );
    const result = await data.json();
    setRestaurant(result);
    console.log(result);
  }

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
