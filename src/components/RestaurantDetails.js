import { useParams } from "react-router-dom";
import { RESTAURANTCARD_IMG_CDN } from "../config";
import RestaurantDetailsShimmer from "./shimmers/RestaurantDetailsShimmer";
import Menu from "./Menu";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import ItemsPurchased from "./ItemsPurchased";
import ClearCartAlert from "./ClearCartAlert";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const Restaurant = useRestaurantDetails(restaurantId);
  if (Restaurant == null) return <RestaurantDetailsShimmer />;

  if (Restaurant === "fetch error") {
    <div className=" my-3 flex w-full flex-wrap justify-center">
      Oops!Looks like we were not able to fetch the data may anyone of the
      following had happened
      <ol>
        <li>
          CORS ERROR:-I am using swiggy public api for the fetching data and due
          to CORS error the request must have been not resolved
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
    </div>;
  }

  return (
    <div className="RestaurantDetails">
      {/* The alert box to shown when user tries to order from another restaurant */}
      <ClearCartAlert />

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
              (element, index) => {
                return (
                  <div key={index} className="my-8">
                    {element.meta}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Menu of the restaurant */}
      <div className="Menu-itemspurchased-container menu-height justi mt-4 flex justify-around">
        <div className="Menu-container scrollbar menu-height flex flex-col items-center overflow-auto border-2 border-gray-200 p-4 shadow-md">
          {Object.values(Restaurant?.data?.menu?.items).map((element) => {
            return (
              <Menu
                key={element?.id}
                menu={element}
                resId={Restaurant?.data?.id}
                resCloudinaryImageId={Restaurant?.data?.cloudinaryImageId}
                resName={Restaurant?.data?.name}
              />
            );
          })}
        </div>

        {/* Items Purchased */}
        <ItemsPurchased />
      </div>
    </div>
  );
};

export default RestaurantDetails;
