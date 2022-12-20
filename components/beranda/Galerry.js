import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { gallerys } from "../constants";
const Galerry = () => {
  return (
    <div className="lg:container py-28 " id="galerry">
      <div className="pb-24">
        <div className="flex flex-cpl items-center justify-between">
          <h1 className=" font-bold text-3xl py-5 uppercase mr-5">Galerry</h1>
          <span className="border-b w-[48rem]  bg-slate-100">
            <hr />
          </span>
          <a className="cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-primary focus:outline-none bg-white rounded-lg border border-primary hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Lihat Semua
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center  w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {gallerys.map((gallery) => {
            return (
              <SwiperSlide key={gallery.id}>
                <a href="#">
                  <img
                    className="bg-white p-5 border rounded-xl"
                    src={gallery.path_to_img}
                    width="100%"
                    alt="Gambar"
                  />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Galerry;
