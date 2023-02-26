import { RESTAURANTCARD_IMG_CDN } from "../config";
import { imagePresent } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/CartSlice";
import Counter from "./Counter";

const Menu = ({ menu }) => {
  const dispatch = useDispatch();

  const handleOrderBtn = () => {
    dispatch(addCartItem(menu));
  };

  return (
    <div
      className="Menu my-4 flex w-[800px] justify-between p-4 shadow-lg"
      key={menu?.id}
    >
      <div className="menuInfo">
        <h1 className="text-xl">{menu?.name}</h1>
        <h4>{menu?.category}</h4>
        <span>price:- &#8377;{menu?.price / 100}</span>
      </div>

      {imagePresent(menu?.cloudinaryImageId) ? (
        <div className="menu-img relative w-64">
          {console.log(RESTAURANTCARD_IMG_CDN + menu?.cloudinaryImageId)}
          <img
            src={RESTAURANTCARD_IMG_CDN + menu?.cloudinaryImageId}
            alt="Menu dish image"
            className="w-full"
          />
          {/* <button
            className="absolute right-1/2 top-[85%] rounded bg-white p-2 text-green-600 shadow-md"
            onClick={handleOrderBtn}
          >
            Order
          </button> */}
          <div className="absolute right-[85px] top-[80%]">
            <Counter menu={menu} />
          </div>
        </div>
      ) : (
        <div className="menu-img ">
          {/* <button
            className="rounded bg-white p-2 text-green-600 shadow-md"
            onClick={handleOrderBtn}
          >
            Order
          </button> */}
          <Counter menu={menu} />
        </div>
      )}

      {/* <div className="menu-img relative w-64">
        {imagePresent(menu?.cloudinaryImageId) ? (
          <img
            src={RESTAURANTCARD_IMG_CDN + menu?.cloudinaryImageId}
            alt="Menu dish image"
            className="w-64"
          />
        ) : null}
        <button className="absolute right-1/2 top-[90%] rounded bg-white p-2 text-green-600 shadow-md">
          Order
        </button>
      </div> */}
    </div>
  );
};
export default Menu;
