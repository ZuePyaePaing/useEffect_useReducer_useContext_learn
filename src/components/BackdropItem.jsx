import { useState } from "react";

const BackdropItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { title, price, image } = props;
  const oneItemPrice = price * quantity;
  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className=" flex items-center justify-between gap-x-3">
      <img
        className=" w-[60px] h-[60px] border-2 overflow-hidden object-cover"
        src={image}
        alt={title}
      />
      <div className="flex flex-col">
        <h3> {title.substring(0, 15)}...</h3>
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
        </div>
      </div>
      <p className=" self-end">$ {oneItemPrice.toFixed(2)}</p>
    </div>
  );
};

export default BackdropItem;
