import { useSelector } from "react-redux";
import veg from "../assets/img/veg.png";
import nonveg from "../assets/img/nonveg.png";
import Counter from "./Counter";

const ItemsPurchased = () => {
  const items = useSelector((store) => store.cart.items);

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
      <div className="w-[278px] p-2">
        <h1 className="bold my-2 text-3xl text-gray-500">Cart items</h1>
        {console.log(items)}
        {items.map((item) => {
          return (
            <>
              <p className="text-xl text-gray-500">
                <img src={nonveg} alt="Veg logo" className="inline-block w-6" />{" "}
                {item.name} {item.itemCount}
              </p>
              <Counter menu={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ItemsPurchased;
