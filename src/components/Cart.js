import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  return (
    <div className="Cart  flex h-full flex-wrap items-center justify-center ">
      <div>
        <div className="my-2 w-[278px] p-4  shadow-2xl">
          <img
            className="my-2 h-[222px] w-full"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
            alt="Carty empty image"
          />
          <h1 className="bold mt-2 text-center text-xl">Your Cart is empty</h1>
        </div>
        <Link to="/">
          <button className="w-full rounded bg-orange-500 p-2 text-center text-white hover:shadow-md">
            Search Restaurants Near you
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
