import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../store/CartSlice";
import { useParams, useLocation } from "react-router-dom";

const Counter = ({ menu, resCloudinaryImageId, resName }) => {
  let { restaurantId } = useParams();
  const [counter, setCounter] = useState(0);
  const location = useLocation();
  // console.log(location.pathname);
  const cartItems = useSelector((store) => store.cart.items);
  const updateItems = useSelector((store) => store.cart.updateItems);

  if (location.pathname == "/cart") {
    console.log(location.pathname);
    console.log("cart path");
    restaurantId = useSelector((store) => store.cart.restaurantId);
  }

  useEffect(() => {
    const item = cartItems.find((element) => element.id == menu.id);
    // console.log("useeffect called");
    if (item) {
      setCounter(item.itemCount);
    } else {
      setCounter(0);
    }
  }, [cartItems]);

  const dispatch = useDispatch();

  const handleIncrementButton = () => {
    // console.log("handleIncrementCalled " + menu.name);
    // console.log(restaurantId);
    dispatch(
      addCartItem({ menu, restaurantId, resCloudinaryImageId, resName })
    );
    // console.log("update items value in handle increment " + updateItems);
    // if (updateItems == 1) {
    //   console.log("conditional handleincrement called");
    //   setCounter(counter + 1);
    // }
  };

  const handleDecrementButton = () => {
    // console.log("handleDecrementCalled");
    if (counter != 0) {
      dispatch(removeCartItem(menu));
      setCounter(counter - 1);
    }
  };
  // console.log(menu);
  // console.log(counter);
  return counter == 0 ? (
    <button
      onClick={handleIncrementButton}
      className="border-l-1 border-gray-300 bg-white p-1 text-green-600 shadow-md"
    >
      Order
    </button>
  ) : (
    <div className="counter ">
      <button
        onClick={handleDecrementButton}
        className="border-r-2 border-gray-300 bg-white p-1 text-green-600 shadow-md"
      >
        -
      </button>
      <button className="border-r-black bg-white p-1 text-green-600 shadow-md">
        {counter}
      </button>
      <button
        onClick={handleIncrementButton}
        className="border-l-2 border-gray-300 bg-white p-1 text-green-600 shadow-md"
      >
        +
      </button>
    </div>
  );
};
export default Counter;
