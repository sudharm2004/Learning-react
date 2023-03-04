import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleUpdateItems } from "../store/CartSlice";

const ClearCartAlert = () => {
  const dispatch = useDispatch();
  const updateItems = useSelector((store) => store.cart.updateItems);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (updateItems == 0) {
      setShowAlert(true);
    }
  }, [updateItems]);

  const handleCloseButton = () => {
    console.log("handle close button");
    dispatch(toggleUpdateItems());
    setShowAlert(false);
  };

  const handleStartAfreshButton = () => {
    console.log("handlestartafresh");
    dispatch(clearCart());
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className=" fixed bottom-[60px]  left-1/2 z-10 w-[520px] translate-x-[-50%] border-2 border-gray-200 bg-white p-2 shadow-md  transition-transform duration-700 ease-in-out">
          <h1 className="my-2 text-xl font-bold">Items already in cart</h1>
          <p className=" my-2">
            Your cart contains items from other restaurant. Would you like to
            reset your cart for adding items from this restaurant?
          </p>
          <div className="my-2 flex  space-x-6">
            <button
              className="w-1/2 rounded bg-gray-600 p-2 text-white"
              onClick={handleCloseButton}
            >
              close
            </button>
            <button
              className="w-1/2 rounded bg-green-600 p-2 text-white"
              onClick={handleStartAfreshButton}
            >
              Start afresh
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ClearCartAlert;
