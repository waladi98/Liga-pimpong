import React from "react";
import {
  FaHome,
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
      {/* <!-- Navigation Toggle --> */}
      {/* <button
        type="button"
        className="text-gray-500 hover:text-gray-600"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="w-5 h-5"
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
      </button> */}
      {/* <!-- End Navigation Toggle --> */}

      <div
        id="docs-sidebar"
        className=" h-screen w-64 bg-gradient-to-b from-primary via-primary to-blue-700 border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-6">
          <h1 className="text-center text-white text-2xl pt-1 pb-4 font-semibold">
            {process.env.appName}
          </h1>
          <hr />
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <small className="text-white uppercase">Main Menu</small>
            <li>
              <Link href="/dashboard">
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm bg-sky-400/75 rounded-md hover:bg-sky-400/75 dark:text-white text-white">
                  <FaHome className="flex-shrink-0 text-white transition duration-75 group-hover:text-white " />
                  Dashboard
                </a>
              </Link>
            </li>

            <li className="hs-accordion" id="users-accordion">
              <a
                className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-white rounded-md hover:bg-sky-400/75 "
                href="#"
              >
                <FaUserGraduate className="flex-shrink-0 text-white transition duration-75 group-hover:text-white " />
                <span className="text-white">Siswa</span>
                <svg
                  className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-white group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <svg
                  className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-white group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </a>

              <div
                id="users-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  className="hs-accordion-group pl-3 pt-2"
                  data-hs-accordion-always-open
                >
                  <li className="hs-accordion" id="users-accordion-sub-1">
                    <a
                      className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-white rounded-md hover:bg-sky-400/75 "
                      href="#"
                    >
                      <span className="text-white">Sub Menu 1</span>
                      <svg
                        className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-white group-hover:text-gray-500 dark:text-gray-400"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      <svg
                        className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-white group-hover:text-white"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </a>

                    <div
                      id="users-accordion-sub-1"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul className="pt-2 pl-2">
                        <li>
                          <Link href="dashboard/siswa">
                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-sky-400/75 ">
                              List Siswa
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <a
                className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-white rounded-md hover:bg-sky-400/75 "
                href="#"
              >
                <FaRegAddressBook className="flex-shrink-0 text-white transition duration-75 group-hover:text-white " />
                <span className="text-white">Guru</span>
                <svg
                  className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-white group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <svg
                  className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-white group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </a>

              <div
                id="users-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  className="hs-accordion-group pl-3 pt-2"
                  data-hs-accordion-always-open
                >
                  <li className="hs-accordion" id="users-accordion-sub-1">
                    <a
                      className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-white rounded-md hover:bg-sky-400/75 "
                      href="#"
                    >
                      <span className="text-white">Sub Menu 1</span>
                      <svg
                        className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-white group-hover:text-gray-500 dark:text-gray-400"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      <svg
                        className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-white group-hover:text-white"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </a>

                    <div
                      id="users-accordion-sub-1"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul className="pt-2 pl-2">
                        <li>
                          <Link href="dashboard/guru">
                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-sky-400/75 ">
                              List guru
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-sky-400/75 "
                href="#"
              >
                <FaRegAddressCard className="flex-shrink-0 text-white transition duration-75 group-hover:text-white " />
                Perpsus
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-sky-400/75 "
                href="#"
              >
                <FaRegCreditCard className="flex-shrink-0 text-white transition duration-75 group-hover:text-white " />
                Keuangan
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-sky-400/75 "
                href="#"
              >
                <FaWhatsapp className="flex-shrink-0 text-white transition duration-75 group-hover:text-white " />
                Broadcast
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-sky-400/75 "
                href="#"
              >
                <FaRegEnvelope className="flex-shrink-0 text-white transition duration-75 group-hover:text-white " />
                Pesan
                <span className="inline-flex justify-center items-center p-3 ml-12z w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-sky-400/75 "
                href="#"
              >
                <FaRegNewspaper className="flex-shrink-0 text-white transition duration-75 group-hover:text-white " />
                Berita & Beasiswa
              </a>
            </li>
          </ul>
          <ul className="space-y-1.5">
            <small className="text-white uppercase">Umum</small>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-md hover:bg-sky-400/75  dark:text-white text-white"
                href="#"
              >
                <FaRegQuestionCircle className="flex-shrink-0 text-white transition duration-75 group-hover:text-white  dark:group-hover:text-white" />
                Bantuan?
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-sky-400/75 "
                href="#"
              >
                <FaRegSun className="flex-shrink-0 text-white transition duration-75 group-hover:text-white " />
                Pengaturan
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
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
