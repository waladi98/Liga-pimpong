import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBroadcastTower } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { live_tornamens } from "./constants";
const Navbar = () => {
  return (
    <header className="  flex flex-wrap sm:justify-start sm:flex-nowrap z-100 w-full  text-sm ">
      <div className="fixed bg-dark w-full py-3">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between "
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex-none">
                <img className="w-10 h-auto" src="../logo.png" alt="Logo" />
              </a>
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700  dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-image-2"
                aria-controls="navbar-image-2"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-image-2"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <a
                className="font-medium text-white"
                href="#"
                aria-current="page"
              >
                Berita
              </a>
              <a
                className="font-medium text-white hover:text-gray-400  "
                href="#"
              >
                Video
              </a>
              <a
                className="font-medium text-white hover:text-gray-400  "
                href="#"
              >
                Pemain
              </a>
              <a
                className="font-medium text-white hover:text-gray-400  "
                href="#"
              >
                Acara
              </a>
              <a
                className="font-medium text-white hover:text-gray-400  "
                href="#"
              >
                Hasil
              </a>
              <a
                className="font-medium text-white hover:text-gray-400  "
                href="#"
              >
                Peringkat
              </a>
              <a
                className="font-medium text-white hover:text-gray-400  "
                href="#"
              >
                Tontong Langsung
              </a>
              <Link href="/login">
                <a className="py-1.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-white bg-slate-800 hover:text-white hover:bg-green-500 hover:border-rose-500 focus:outline-none   text-sm ">
                  Masuk
                </a>
              </Link>

              <Link href="/">
                {/* <a className="py-1.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2  font-semibold text-white bg-gradient-to-r from-green-500 to-green-700  hover:bg-rose-500 hover:border-rose-500 focus:outline-none  focus:ring-blue-200   text-sm  ">
                  Informasi
                </a> */}
                <a className="relative  py-1.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2  font-semibold text-white bg-gradient-to-r from-green-500 to-green-700  hover:bg-rose-500 hover:border-rose-500 focus:outline-none  focus:ring-blue-200   text-sm  cursor-pointer  ">
                  Informasi
                  <span className="animate-ping absolute -top-1 -right-1 z-10 inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                  <span className="absolute -top-1 -right-1 z-10 h-3 w-3 bg-red-500 rounded-full "></span>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
