import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegBell, FaRegEnvelope } from "react-icons/fa";
const NavbarAdmin = () => {
  return (
    <div className="flex justify-between p-4 bg-white mt-3 rounded-xl shadow-sm">
      <h1 className="text-sm font-bold text-gray-700"></h1>
      <div className="flex justify-between w-2/5">
        <div className="flex items-center "></div>
        <div className="flex items-center space-x-6 pr-8">
          <span className="relative cursor-pointer">
            <FaRegBell className="text-[24px] text-gray-500" />
            <span className="animate-ping absolute -top-1 -right-1 z-10 inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
            <span className="absolute -top-1 -right-1 z-10 h-3 w-3 bg-green-500 rounded-full "></span>
          </span>
          <span className="relative cursor-pointer">
            <FaRegEnvelope className=" text-[24px] text-gray-500" />
            <span className="animate-ping absolute -top-1 -right-1 z-10 inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
            <span className="absolute -top-1 -right-1 z-10 h-3 w-3 bg-red-500 rounded-full "></span>
          </span>
          <span>
            <img
              src="https://picsum.photos/32"
              alt=""
              className="cursor-pointer rounded-full"
              width="100%"
            />
          </span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
