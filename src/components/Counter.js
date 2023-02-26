import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../store/CartSlice";

const Counter = ({ menu }) => {
  const [counter, setCounter] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const item = cartItems.find((element) => element.id == menu.id);
    if (item) {
      setCounter(item.itemCount);
    }
  }, []);

  const dispatch = useDispatch();

  const handleIncrementButton = () => {
    dispatch(addCartItem(menu));
    setCounter(counter + 1);
  };

  const handleDecrementButton = () => {
    if (counter != 0) {
      dispatch(removeCartItem(menu));
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <button
        onClick={handleDecrementButton}
        className="border-r-2 border-gray-300 bg-white p-2 text-green-600 shadow-md"
      >
        -
      </button>
      <button className="border-r-black bg-white p-2 text-green-600 shadow-md">
        {counter}
      </button>
      <button
        onClick={handleIncrementButton}
        className="border-l-2 border-gray-300 bg-white p-2 text-green-600 shadow-md"
      >
        +
      </button>
    </div>
  );
};
export default Counter;
