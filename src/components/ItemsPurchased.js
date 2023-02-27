import { useSelector } from "react-redux";
import veg from "../assets/img/veg.png";
import nonveg from "../assets/img/nonveg.png";
import Counter from "./Counter";
import { useState } from "react";

const ItemsPurchased = () => {
  const items = useSelector((store) => store.cart.items);

  let total = 0;

  // Early returns if the no items added in cart
  if (items.length == 0) {
    return (
      <div className="w-[278px]  p-2">
        <h1 className="bold my-2 text-3xl text-gray-500">Cart empty</h1>
        <img
          className="h-[222px] w-full"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
          alt="Carty empty image"
        />
        <p className="text-xl text-gray-500">Good food is always cooking</p>
      </div>
    );
  }

  return (
    <>
      <div className="scrollbar flex h-[272px] w-[278px] flex-col overflow-scroll p-2 shadow-lg">
        <h1 className="bold my-2 text-3xl ">Cart</h1>
        {console.log(items)}
        <div>
          {items.map((item) => {
            total += item.itemCount * (item.price / 100);
            return (
              <div className="my-1 grid grid-cols-3">
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
                <span> &#8377;{item.itemCount * (item.price / 100)}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-auto flex justify-between">
          <span className="bold text-lg">SubTotal:-</span>
          <span>&#8377;{total}</span>
        </div>
      </div>
    </>
  );
};

export default ItemsPurchased;
