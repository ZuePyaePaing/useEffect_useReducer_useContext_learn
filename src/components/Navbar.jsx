import { useState } from "react";
import { useStateContextCustom } from "../context/StateContext";
import Backdrop from "./Backdrop";
import BackdropItem from "./BackdropItem";

const Navbar = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const {
    state: { cart },
    search,
    setSearch,
  } = useStateContextCustom();

  const handleCloseBackdrop = () => setShowBackdrop(false);
  const handleOpenBackdrop = () => setShowBackdrop(true);

  return (
    <nav className=" fixed top-0  w-full bg-green-200 px-12 py-4 z-10 shadow-lg">
      <div className=" flex items-center justify-between">
        <h2 className=" text-yellow-500 font-bold text-2xl">Happy Store</h2>
        <div className=" flex gap-x-4 items-center">
          <div className=" relative px-3 py-2 bg-white shadow-lg ">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
              type="text"
              placeholder="Search Products..."
              className="border-none outline-none text-yellow-500"
            />
          </div>
          <div
            onClick={handleOpenBackdrop}
            className=" relative px-4 py-2 bg-yellow-500 rounded-lg cursor-pointer shadow-lg text-white hover:scale-90 transition-all"
          >
            <p className=" font-medium">Cart</p>
            <span className=" inline-block absolute w-6 h-6 text-center rounded-full bg-red-400 -top-2 -right-1">
              {cart.length}
            </span>
          </div>
        </div>
      </div>
      <div>
        {" "}
        {showBackdrop && (
          <Backdrop onClose={handleCloseBackdrop}>
            <h1 className="text-2xl font-bold">My Order</h1>
            <div className=" flex items-center justify-center flex-col gap-y-3">
              {cart.map((item) => (
                <BackdropItem key={item.id} {...item} />
              ))}
            </div>
            <div className=" border-t-2 my-2 border-gray-500 flex items-center justify-between">
              <h2>Total Amount</h2>
              <p>$ {0}</p>
            </div>
          </Backdrop>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
