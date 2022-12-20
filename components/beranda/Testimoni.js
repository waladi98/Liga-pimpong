import React from "react";
import { testimonis } from "../constants";
const Testimoni = () => {
  return (
    <div className="lg:container pt-24" id="testimoni">
      {/* <div className="pb-24">
        <div className="flex flex-cpl items-center justify-between">
          <h1 className=" font-bold text-3xl py-5 uppercase mr-5">Galerry</h1>
          <span className="border-b w-[48rem]  bg-slate-100">
            <hr />
          </span>
          <a className="cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Lihat Semua
          </a>
        </div>
      </div> */}
      <div className="flex flex-wrap items-center justify-center  w-full">
        <div className="text-left  w-1/2 text-lg">
          <h1 className="font-bold text-6xl py-5">
            Apa kata mereka tentang kami.
          </h1>
        </div>
        <div className=" w-1/2 ">
          {testimonis.map((testimoni) => {
            return (
              <div
                className="bg-white border p-8 rounded-xl my-4"
                key={testimoni.id}
              >
                <span className="flex items-center ">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={testimoni.avatar}
                    alt="Rounded avatar"
                  />
                  <span>
                    <h6 className="px-5 font-semibold">{testimoni.nama}</h6>
                    <small className="px-5 font-base text-gray-400">
                      {testimoni.jenis_user}
                    </small>
                  </span>
                </span>
                <p className="py-2">{testimoni.testimoni}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
