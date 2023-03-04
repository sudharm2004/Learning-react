import React from "react";

const RestaurantDetailsShimmer = () => {
  return (
    <div className="RestaurantDetails">
      {/* This below code contains the infomation about hotel */}
      <div className="sticky flex  justify-between bg-black p-10">
        {/* Image shimmer */}
        <div className="mr-8 h-44 w-72 rounded-r-md bg-gray-600"></div>

        {/* data shimmer */}

        <div className="flex w-80 flex-col p-2">
          <h1 className="h-[20px] w-full bg-gray-400 text-3xl font-bold text-white">
            {/* {Restaurant?.data?.name} */}
          </h1>
          <span className="mt-2 h-[20px] w-1/2  bg-gray-400 text-stone-400">
            {/* {Restaurant?.data?.city},{Restaurant?.data?.area} */}
          </span>
          <span className="mt-2  h-[20px] w-1/2 bg-gray-400 text-stone-400">
            {/* {Restaurant?.data?.cuisines?.join(",")} */}
          </span>
          <div className="mt-2 flex space-x-4">
            <div className="flex w-1/3 flex-col border-r-2 border-white pr-5">
              <span className="my-1 h-[10px] w-full bg-gray-400 text-white">
                {/* {Restaurant?.data?.avgRating} */}
              </span>
              <span className="my-1 h-[10px] w-full bg-gray-400 text-stone-400">
                {/* +{Restaurant?.data?.totalRatings} Ratings */}
              </span>
            </div>
            <div className="flex w-1/3 flex-col border-r-2 border-white pr-5">
              <span className="my-1 h-[10px] w-full bg-gray-400 text-white">
                {/* {Restaurant?.data?.sla?.slaString} */}
              </span>
              <span className="my-1 h-[10px] w-full bg-gray-400 text-stone-400">
                {/* Delivery Time */}
              </span>
            </div>
            <div className="flex w-1/3 flex-col">
              <span className="my-1 h-[10px] w-full bg-gray-400 text-white">
                {/* &#8377;{Restaurant?.data?.costForTwo / 100} */}
              </span>
              <span className="my-1 h-[10px] w-full bg-gray-400 text-stone-400">
                {/* Cost For Two */}
              </span>
            </div>
          </div>
        </div>

        {/* Offer Ui */}
        <div className="flex w-64 flex-col justify-evenly border-2 border-white bg-gray-600 p-3 text-xl text-white">
          <div className="h-[15px] w-full rounded bg-gray-900"></div>
          <div className="h-[15px] w-full rounded bg-gray-900"></div>
        </div>
      </div>

      {/* Menu of the restaurant */}

      <div className="Menu-itemspurchased-container menu-height justi mt-4 flex justify-around overflow-auto">
        <div className="Menu-container scrollbar menu-height flex flex-col items-center overflow-auto border-2 border-gray-200 p-4 shadow-md">
          <div className="Menu my-4 flex h-60 w-[800px] justify-between bg-gray-500 p-4 shadow-lg"></div>
          <div className="Menu my-4 flex h-60 w-[800px] justify-between bg-gray-500 p-4 shadow-lg"></div>
          <div className="Menu my-4 flex h-60 w-[800px] justify-between bg-gray-500 p-4 shadow-lg"></div>
        </div>

        <div className="w-[278px]  p-2">
          <h1 className="bold my-2 text-3xl text-gray-500">Cart empty</h1>
          <img
            className="h-[222px] w-full"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
            alt="Carty empty image"
          />
          <p className="text-xl text-gray-500">Good food is always cooking</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailsShimmer;
