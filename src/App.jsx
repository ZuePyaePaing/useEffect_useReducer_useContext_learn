import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className=" bg-gray-400 w-full">
      <div className=" container relative">
        <Navbar />
        <section className="mt-16 px-16 py-6">
          <div className=" mb-5">
            <h1 className=" text-yellow-500 font-bold text-3xl mb-3"> The Best one of the Onile Shop in Myanmar.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil eius animi deserunt aperiam repellat quae, tempore ex mollitia dolores pariatur delectus nobis optio libero accusamus minima perferendis, alias iste?</p>
          </div>
          <Cards />
        </section>
      </div>
    </main>
  );
};

export default App;
