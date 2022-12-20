import React, { useEffect, useState, Fragment } from "react";
import LayoutAdmin from "../../../components/LayoutAdmin";
import { RxidTable, useTable } from "../../../components/tables/rxid-table";
import { useRouter } from "next/router";
import { FaRegSun, FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
const index = () => {
  const router = useRouter();
  const cars = [
    {
      id: 1,
      name: "BWM",
      color: "Black",
    },
    {
      id: 2,
      name: "Marzedes Benz",
      color: "Red",
    },
  ];

  const userAction = (record) => {
    return (
      <Fragment>
        <div className="hs-dropdown  inline-flex">
          <button
            id="hs-dropdown-with-icons"
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center gap-2 p-1 rounded-md border border-transparent font-semibold  text-blue bg-blue-50 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  "
          >
            <FaRegSun />
          </button>

          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden  min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 "
            aria-labelledby="hs-dropdown-with-icons"
          >
            <div className="py-2 first:pt-0 last:pb-0">
              <a
                onClick={() => handleView(record)}
                className="cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
              >
                <div className="flex items-center ">
                  <FaRegEye />
                  <span className="mx-3">View Detail</span>
                </div>
              </a>
              <a
                onClick={() => handleEdit(record)}
                className="cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
              >
                <div className="flex items-center ">
                  <FaRegEdit />
                  <span className="mx-3">Edit</span>
                </div>
              </a>
              <a
                onClick={() => handleDelete(record)}
                className="cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                data-hs-overlay="#hs-basic-modal"
              >
                <div className="flex items-center ">
                  <FaRegTrashAlt />
                  <span className="mx-3">Delete</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          id="hs-basic-modal"
          class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
          <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-xl ">
              <div class="flex justify-between items-center py-3 px-4 border-b ">
                <h3 class="font-bold text-gray-800 ">Hapus Data</h3>
                <button
                  type="button"
                  class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm "
                  data-hs-overlay="#hs-basic-modal"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="w-3.5 h-3.5"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div class="p-4 overflow-y-auto">
                <p class="mt-1 text-gray-800 dark:text-gray-400">
                  Apakah anda yakin akan menghapus data tersebut?
                </p>
              </div>
              <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t ">
                <button
                  type="button"
                  class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm "
                  data-hs-overlay="#hs-basic-modal"
                >
                  Batal
                </button>
                <a
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  href="#"
                  data-hs-overlay="#hs-basic-modal"
                >
                  Hapus
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      // <Fragment>
      //   <button
      //     className="btn btn-sm btn-primary"
      //     onClick={() => handleView(record)}
      //   >
      //     <p>1</p>
      //   </button>
      //   <button
      //     className="btn btn-sm btn-warning mx-2"
      //     onClick={() => handleEdit(record)}
      //   >
      //     <p>2</p>
      //   </button>
      //   <button
      //     className="btn btn-sm btn-danger"
      //     onClick={() => handleDelete(record)}
      //   >
      //     <p>3</p>
      //   </button>
      // </Fragment>
    );
  };
  const postModel = useTable({
    columns: [
      {
        header: "Judul",
        field: "title",
      },
      {
        header: "Artikel",
        field: "body",
      },
      {
        header: "Aksi",
        component: userAction,
        sortable: false,
        options: {
          header: {
            className: "mx-auto",
          },
        },
      },
    ],
  });
  const badges = [
    "bg-primary",
    "bg-secondary",
    "bg-info",
    "bg-success",
    "bg-warning",
    "bg-danger",
  ];

  const userServerModel = useTable({
    columns: [
      {
        header: "Name",
        field: "name",
      },
      {
        header: "Username",
        field: "username",
        component: (record) => {
          const background = badges[(record.id - 1) % 6];
          return (
            <>
              <span className={"badge " + background}>
                {record.username || ""}
              </span>
            </>
          );
        },
      },
      {
        header: "Email",
        field: "email",
      },
      {
        header: "Phone Number",
        field: "phone",
      },
      {
        header: "Website",
        field: "website",
      },
      {
        header: "City",
        field: "address.city",
      },
      {
        header: "Street",
        field: "address.street",
      },
      {
        header: "Suite",
        field: "address.suite",
      },
      {
        header: "Zip Code",
        field: "address.zipcode",
      },
      {
        header: "Aksi",
        component: userAction,
        sortable: false,
        options: {
          header: {
            className: "mx-auto",
          },
        },
      },
    ],
    perPage: 5,
  });

  const userClientModel = useTable({
    columns: [
      {
        header: "Title",
        field: "title",
      },

      {
        header: "Aksi",
        component: userAction,
        sortable: false,
        options: {
          header: {
            className: "mx-auto",
          },
        },
      },
    ],
    perPage: 5,
  });

  const carModel = useTable({
    columns: [
      {
        header: "Name",
        field: "name",
      },
      {
        header: "Color",
        field: "color",
      },
    ],
    records: cars,
    perPage: 1,
    totalRecord: cars.length,
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(
      async (successRepsonse) => {
        const result = await successRepsonse.json();
        userClientModel.setRecords(result);
      }
    );
  }, []);

  const handleDelete = (record) => {
    console.log("Info: Come from handleDelete");
    console.log(record);
  };

  const handleEdit = (record) => {
    router.push("/dashboard/siswa/edit");
    console.log("Info: Come from handleEdit");
    console.log(record);
  };

  const handleView = (record) => {
    console.log("Info: Come from handleView");
    console.log(record);
  };
  return (
    <LayoutAdmin title="Dashboard">
      <div className="p-5 bg-white rounded-md border border-gray-200">
        <h1 className="text-2xl font-bold pb-3">Siswa</h1>
        <RxidTable
          model={postModel}
          stringUrl="https://jsonplaceholder.typicode.com/posts"
          pathAdd="/dashboard/siswa/add"
        />
      </div>
    </LayoutAdmin>
  );
};

export default index;
