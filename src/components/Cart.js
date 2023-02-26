import { useSelector } from "react-redux";
import { RESTAURANTCARD_IMG_CDN } from "../config";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  return (
    <div className="Cart flex flex-wrap justify-center">
      Cart Page
      {console.log(cart)}
      {cart.map((item) => {
        return (
          <div
            className="Food-item m-2 flex w-64 flex-col space-y-1 break-words rounded-md border-2 p-3 hover:shadow-lg"
            key={item.id}
          >
            <img
              className="w-full"
              src={RESTAURANTCARD_IMG_CDN + item.cloudinaryImageId}
              alt="restaurantLogo"
            />
            <h2 className="text-lg font-bold">{item.name}</h2>
            <span className="text-sm">Price:-{item.price / 100}</span>
            <h5 className="">max delivery time:- {item.maxDeliveryTime}</h5>
            <h1 className="bold text-3xl">Item Count:-{item.itemCount}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
