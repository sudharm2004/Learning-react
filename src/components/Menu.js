import { RESTAURANTCARD_IMG_CDN } from "../config";
import { imagePresent } from "../utils/helper";

const Menu = ({ menu }) => {
  

  return (
    <div className="MenuDetails" key={menu?.id}>
      <div className="menuInfo">
        &#9824;<h1 className="inline">{menu?.name}</h1>
        <h4>{menu?.category}</h4>
        <span>price:- &#8377;{menu?.price / 100}</span>
        <p>{menu?.description}</p>
      </div>
      <div className="menu-img">
        {imagePresent(menu?.cloudinaryImageId) ? (
          <img
            src={RESTAURANTCARD_IMG_CDN + menu?.cloudinaryImageId}
            alt="Menu dish image"
          />
        ) : null}
        <button>Order</button>
      </div>
    </div>
  );
};
export default Menu;
