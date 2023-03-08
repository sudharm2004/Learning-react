import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RESTAURANTCARD_IMG_CDN } from "../config";
import veg from "../assets/img/veg.png";
import nonveg from "../assets/img/nonveg.png";
import Counter from "./Counter";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const resCloudinaryImageId = useSelector(
    (store) => store.cart.resCloudinaryImageId
  );
  const resName = useSelector((store) => store.cart.resName);

  let total = 0;

  if (items.length == 0) {
    return (
      <div className="Cart  flex h-full flex-wrap items-center justify-center ">
        <div>
          <div className="my-2 w-[278px] p-4  shadow-2xl">
            <img
              className="my-2 h-[222px] w-full"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
              alt="Carty empty image"
            />
            <h1 className="bold mt-2 text-center text-xl">
              Your Cart is empty
            </h1>
          </div>
          <Link to="/">
            <button className="w-full rounded bg-orange-500 p-2 text-center text-white hover:shadow-md">
              Search Restaurants Near you
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="Cart my-2 flex w-full flex-wrap items-center justify-center">
      <div className="border-1 w-80 border-black p-4 shadow-lg">
        <div className=" bold my-2 flex w-full items-center  p-4 text-xl">
          <img
            className="my-2 mx-2 w-20"
            src={RESTAURANTCARD_IMG_CDN + resCloudinaryImageId}
            alt="Carty empty image"
          />
          <span className="bold">{resName}</span>
        </div>
        <div className="my-4">
          {items.map((item) => {
            total += item.itemCount * (item.price / 100);
            return (
              <div className="my-1 grid grid-cols-3 " key={item.id}>
                <p className="text-md text-gray-500">
                  {item.isVeg ? (
                    <img
                      src={veg}
                      alt="Veg logo"
                      className="inline-block w-6"
                    />
                  ) : (
                    <img
                      src={nonveg}
                      alt="Veg logo"
                      className="inline-block w-6"
                    />
                  )}
                  {item.name}
                </p>
                <Counter menu={item} />
                <span className="text-end">
                  {" "}
                  &#8377;{item.itemCount * (item.price / 100)}
                </span>
              </div>
            );
          })}
          <hr className="my-2" />
          <div className="mt-auto flex justify-between">
            <span className="text-lg font-bold">SubTotal:-</span>
            <span className="text-lg font-bold">&#8377;{total}</span>
          </div>
        </div>
        <button
          className="w-full rounded bg-green-500 p-2 text-center text-white hover:shadow-md"
          onClick={() => {
            alert("Payment feature has not been added yet :)");
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
