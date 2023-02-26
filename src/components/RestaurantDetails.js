import { useParams } from "react-router-dom";
import { RESTAURANTCARD_IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import Menu from "./Menu";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import ItemsPurchased from "./ItemsPurchased";

const RestaurantDetails = () => {
  const { id } = useParams();
  const Restaurant = useRestaurantDetails(id);
  console.log(Restaurant);
  if (Restaurant == null) return <Shimmer />;

  return (
    <div className="RestaurantDetails">
      {/* This below code contains the infomation about hotel */}
      <div className="sticky flex  justify-between bg-black p-10">
        <img
          className="mr-8 w-72 rounded-r-md"
          src={RESTAURANTCARD_IMG_CDN + Restaurant?.data?.cloudinaryImageId}
          alt="restaurantLogo"
        />

        <div className="flex flex-col p-2">
          <h1 className="text-3xl font-bold text-white">
            {Restaurant?.data?.name}
          </h1>
          <span className="mt-2 text-stone-400">
            {Restaurant?.data?.city},{Restaurant?.data?.area}
          </span>
          <span className="mt-2 text-stone-400">
            {Restaurant?.data?.cuisines?.join(",")}
          </span>
          <div className="mt-2 flex space-x-4">
            <div className="flex flex-col border-r-2 border-white pr-5">
              <span className="text-white">{Restaurant?.data?.avgRating}</span>
              <span className="text-stone-400">
                +{Restaurant?.data?.totalRatings} Ratings
              </span>
            </div>
            <div className="flex flex-col border-r-2 border-white pr-5">
              <span className="text-white">
                {Restaurant?.data?.sla?.slaString}
              </span>
              <span className="text-stone-400">Delivery Time</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white">
                &#8377;{Restaurant?.data?.costForTwo / 100}
              </span>
              <span className="text-stone-400">Cost For Two</span>
            </div>
          </div>
        </div>
        {/* Offer Ui */}
        <div className="flex flex-col justify-center border-2 border-white p-3 text-xl text-white">
          <div>
            {Restaurant?.data?.aggregatedDiscountInfo?.descriptionList.map(
              (element) => {
                return <div className="my-8">{element.meta}</div>;
              }
            )}
          </div>
        </div>
      </div>

      <div className="Menu justi flex justify-around">
        {/* Menu of the restaurant */}
        <div className="Menu custom-scrollbar flex h-96 flex-col items-center overflow-scroll">
          {Object.values(Restaurant?.data?.menu?.items).map((element) => {
            return <Menu key={element?.id} menu={element} />;
          })}
        </div>

        {/* Items Purchased */}
        <ItemsPurchased />
      </div>
    </div>
  );
};

export default RestaurantDetails;
