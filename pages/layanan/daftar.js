import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
export const daftars = [
  {
    id: 1,
    title: "Pendaftaran Kejuaraan Baru",
    image: "https://picsum.photos/500/300",
    description:
      "Untuk mendaftarkan event kejuaran baru dapat melalui menu ini.",
    link: "#",
  },
  {
    id: 2,
    title: "Pendaftaran Klub",
    image: "https://picsum.photos/500/300",
    description: "Untuk mendaftarkan Klub Tenis baru dapat melalui menu ini.",
    link: "#",
  },
  {
    id: 3,
    title: "Pendaftaran Pemain",
    image: "https://picsum.photos/500/300",
    description: "Untuk mendaftarkan Pemain dapat melalui menu ini.",
    link: "#",
  },
];
const Daftar = () => {
  return (
    <div className="container ">
      <h1 className="font-extrabold text-center lg:text-2xl bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
        Informasi Liga Pingpong Jabar Kahiji Ngahiji 2023
      </h1>
      <div className="flex items-center justify-center flex-wrap my-8">
        {/* {daftars.map((daftar, index) => {})} */}
        <div className="flex flex-col bg-white border  shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] my-2 mr-2">
          <img
            className="w-full h-auto rounded-t-xl"
            src="/card/info.jpg"
            alt="Image Description"
            style={{ width: "500px", height: "300px" }}
          />
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Informasi Liga
            </h3>
            <p className="mt-1 text-gray-800 dark:text-gray-400 break-normal max-w-sm">
              Untuk Informasi mengenai{" "}
              <span className="text-green-500">
                Liga Pingpong Jabar Kahiji Ngahiji 2023{" "}
              </span>
              dapat di unduh melalui menu ini.
            </p>
            <a
              className="mt-2 py-2 w-full inline-flex justify-center items-center gap-2 rounded-md border-2  font-semibold text-white bg-gradient-to-r from-green-500 to-green-700  hover:bg-rose-500 hover:border-rose-500 focus:outline-none  focus:ring-blue-200   text-sm"
              href="/pdf/Liga Pingpong Jabar Kahiji Ngahiji 2023.pdf"
              target="_blank"
            >
              Unduh
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-white border  shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] ml-2">
          <img
            className="w-full h-auto rounded-t-xl"
            src="/card/raket.jpg"
            alt="Image Description"
            style={{ width: "500px", height: "300px" }}
          />
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Pendaftaran Pemain
            </h3>
            <p className="mt-1 text-gray-800 dark:text-gray-400 max-w-sm">
              Untuk mendaftarkan pemain dalam{" "}
              <span className="text-green-500">
                Liga Pingpong Jabar Kahiji Ngahiji 2023{" "}
              </span>{" "}
              dapat melalui menu ini.
            </p>
            <button
              type="button"
              className="mt-2 py-2 w-full inline-flex justify-center items-center gap-2 rounded-md border-2  font-semibold text-white bg-gradient-to-r from-green-500 to-green-700  hover:bg-rose-500 hover:border-rose-500 focus:outline-none  focus:ring-blue-200   text-sm"
              data-hs-overlay="#hs-scroll-inside-body-modal"
            >
              Daftar
            </button>
            {/* <Link
              href={{
                pathname: "/frame",
                query: { slug: "my-post", id: 1 },
              }}
            >
              <a className="mt-2 py-2 w-full inline-flex justify-center items-center gap-2 rounded-md border-2  font-semibold text-white bg-gradient-to-r from-green-500 to-green-700  hover:bg-rose-500 hover:border-rose-500 focus:outline-none  focus:ring-blue-200   text-sm">
                Daftar
              </a>
            </Link> */}
          </div>
        </div>
      </div>

      <div
        id="hs-scroll-inside-body-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className=" hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all  m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
          <div className="max-h-full w-screen overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <p className="mt-1 text-sm font-extrabold  lg:text-2xl bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                Pendaftaran
              </p>
              <button
                type="button"
                className="hs-dropdown-toggle py-1 m-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-red-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-scroll-inside-body-modal"
              >
                Tutup
              </button>
            </div>
            <div className=" overflow-y-auto ">
              <iframe
                src="https://ptmsi-jabar.com/q_pemain.php"
                title="https://ptmsi-jabar.com"
                className="w-full  h-screen "
                style={{ height: "1100px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
