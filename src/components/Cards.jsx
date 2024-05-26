import Card from "./Card";
import { useStateContextCustom } from "../context/StateContext";
const Cards = () => {
  const {
    state: { products },
  } = useStateContextCustom();

  if (products.length === 0) {
    return (
      <section className=" flex items-center justify-center">
        <h2 className=" text-3xl font-bold text-white">
          {" "}
          Your search Product Not found!
        </h2>
      </section>
    );
  }
  return (
    <section className=" flex items-center justify-center flex-wrap gap-5">
      {products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Cards;
