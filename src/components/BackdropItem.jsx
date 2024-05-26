import { useState } from "react";
import { useStateContextCustom } from "../context/StateContext";

const BackdropItem = ({ item, increaseTotal, decreaseTotal }) => {
  const { dispatch } = useStateContextCustom();
  const [quantity, setQuantity] = useState(1);

  const oneItemPrice = item.price * quantity;

  const increase = () => {
    setQuantity(quantity + 1);
    increaseTotal(item.price);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseTotal(item.price);
    }
  };

  const deletebtn = () => {
    dispatch({ type: "REMOVE_CART", payload: item });
    decreaseTotal(oneItemPrice);
  };
  
  return (
    <div className=" w-[90%] flex items-center justify-between gap-x-3">
      <img
        className=" w-[60px] h-[60px] border-2 overflow-hidden object-cover"
        src={item.image}
        alt={item.title}
      />
      <div className="flex flex-col">
        <h3> {item.title.substring(0, 15)}...</h3>
        <div className=" flex gap-x-2 items-center ">
          <p
            onClick={decrease}
            className="bg-gray-500 w-6 h-6 text-center cursor-pointer  text-white rounded-lg  text-xl"
          >
            -
          </p>
          <p className=" text-lg font-bold">{quantity}</p>
          <p
            onClick={increase}
            className=" bg-gray-500 text-white w-6 h-6 text-center rounded-lg cursor-pointer text-xl"
          >
            +
          </p>
          <p onClick={deletebtn} className=" cursor-pointer">
            remove
          </p>
        </div>
      </div>
      <p className=" self-end">$ {oneItemPrice.toFixed(2)}</p>
    </div>
  );
};

export default BackdropItem;
