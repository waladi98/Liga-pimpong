import React from "react";
import { partners } from "../constants";
const Partner = () => {
  return (
    <div className="lg:container bg-gray-100  rounded-xl py-18">
      <div className="flex items-center justify-center">
        <img
          className="mx-5 p-2"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="media partner"
          width={100}
        />
      </div>
    </div>
  );
};

export default Partner;
