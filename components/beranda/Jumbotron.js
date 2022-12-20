import React from "react";

const Jumbotron = () => {
  return (
    <div className="lg:container py-5">
      <div className="flex flex-wrap items-center justify-center  w-full mt-10">
        <div className="text-left  w-1/2 text-lg">
          <h3 className="font-semibold">Lorem, ipsum dolor.</h3>
          <h1 className="font-bold text-6xl py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <h3 className="font-semibold text-lg">Lorem, ipsum dolor.</h3>
        </div>
        <div className="lg:visible invisible w-1/2 ">
          <img
            className="ml-auto"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            width="500px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
