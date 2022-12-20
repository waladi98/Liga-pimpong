import React from "react";
import {
  FaUserGraduate,
  FaRegSun,
  FaRegQuestionCircle,
  FaRegNewspaper,
  FaRegEnvelope,
  FaRegCreditCard,
  FaRegAddressBook,
  FaRegAddressCard,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
const Sidebar = () => {
  return (
    <>
      <aside className="w-64 " aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3   dark:bg-gray-800 h-screen bg-gradient-to-b from-primary via-primary to-blue-700 ">
          <h1 className="text-center text-white text-2xl pt-1 pb-4 font-semibold">
            {process.env.appName}
          </h1>
          <hr className="pb-3" />
          <ul className="space-y-2 ">
            <small className="text-white uppercase">Main Menu</small>
            <li>
              <a
                href="#"
                className="bg-sky-400/75  flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white   dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 text-white">Dashboard</span>
              </a>
            </li>
            {/* <li>
              <button
                type="button"
                class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  E-commerce
                </span>
                <svg
                  sidebar-toggle-item
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul id="dropdown-example" class="hidden py-2 space-y-2">
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li> */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-sky-400/75 dark:hover:bg-gray-700"
              >
                <FaRegAddressBook className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Guru</span>
                <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-sky-400/75 dark:hover:bg-gray-700"
              >
                <FaRegAddressCard className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Perpus</span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-sky-400/75 dark:hover:bg-gray-700"
              >
                <FaRegCreditCard className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Keuangan</span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-sky-400/75 dark:hover:bg-gray-700"
              >
                <FaWhatsapp className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Broadcast</span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-sky-400/75 dark:hover:bg-gray-700"
              >
                <FaRegEnvelope className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Pesan</span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-sky-400/75 dark:hover:bg-gray-700"
              >
                <FaRegNewspaper className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Berita & Beasiswa
                </span>
              </a>
            </li>
          </ul>
          <ul className="space-y-2 ">
            <small className="text-white uppercase">Pengaturan</small>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-sky-400/75 dark:hover:bg-gray-700"
              >
                <FaRegQuestionCircle className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Bantuan?</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-sky-400/75 dark:hover:bg-gray-700"
              >
                <FaRegSun className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Pengaturan
                </span>
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-center pt-5">
            <Link href="/login">
              <a className="relative  bg-logout   text-black font-semibold px-10 py-2  rounded-lg hover:shadow-purple-400 hover:bg-purple-300 cursor-pointer  ">
                Keluar
              </a>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
