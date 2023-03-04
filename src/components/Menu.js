import { RESTAURANTCARD_IMG_CDN } from "../config";
import { imagePresent } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/CartSlice";
import Counter from "./Counter";

const Menu = ({ menu, resId, resCloudinaryImageId, resName }) => {
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
          <img
            src={RESTAURANTCARD_IMG_CDN + menu?.cloudinaryImageId}
            alt="Menu dish image"
            className="w-full"
          />
          <div className="absolute right-[85px] top-[80%]">
            <Counter
              menu={menu}
              resId={resId}
              resCloudinaryImageId={resCloudinaryImageId}
              resName={resName}
            />
          </div>
        </div>
      ) : (
        <div className="menu-img ">
          <Counter
            menu={menu}
            resId={resId}
            resCloudinaryImageId={resCloudinaryImageId}
            resName={resName}
          />
        </div>
      )}
    </div>
  );
};
export default Menu;
