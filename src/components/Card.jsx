import { useStateContextCustom } from "../context/StateContext";

const Card = (props) => {
  const { title, image, price } = props;
  const { dispatch } = useStateContextCustom();
  return (
    <div className=" flex flex-col justify-between gap-y-2 w-[300px] h-[350px] rounded-2xl bg-white shadow-lg p-2">
      <img
        alt={title}
        src={image}
        className=" w-full h-[200px] object-contain"
      />
      <h1 className=" font-bold ">{title.substring(0, 25)}...</h1>
      <p className=" font-medium">$ {price}</p>
      <button
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
        className=" active:scale-95 hover:bg-yellow-400 transition-all w-full text-white px-4 py-2 rounded-lg bg-yellow-500"
      >
        Add
      </button>
    </div>
  );
};

export default Card;
