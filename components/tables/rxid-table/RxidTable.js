import React, { useEffect, useState } from "react";
import { RxidPagination } from "../rxid-pagination";
import { resolveRecord } from "./resolveRecord";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
// import "./RxidTable.css";
export const RxidTable = ({ model, stringUrl, pathAdd }) => {
  const router = useRouter();
  const [state, setState] = useState({
    records: [],
    keywords: "",
    perPage: model.pagination.perPage,
    sortField: "",
    sortOrder: "",
    currentPage: 1,
  });

  useEffect(() => {
    if (stringUrl) {
      let queryParams = `?&_start=${
        (state.currentPage - 1) * state.perPage
      }&_limit=${state.perPage}`;

      if (state.keywords) {
        queryParams += `&q=${state.keywords}`;
      }

      if (state.sortField) {
        queryParams += `&_sort=${state.sortField}&_order=${state.sortOrder}`;
      }

      fetch(stringUrl + queryParams)
        .then(async (successResponse) => {
          const totalRecord = successResponse.headers.get("X-Total-Count");
          model.setTotalRecord(totalRecord);
          const records = await successResponse.json();

          setState((state) => ({
            ...state,
            records,
          }));
        })
        .catch((errorResponse) => {
          console.log(errorResponse);
        });
    } else {
      let records = Array.from(model.records);
      records = searchRecords(records);
      records = sortRecords(records);
      records = records.splice(
        (state.currentPage - 1) * state.perPage,
        state.perPage
      );
      setState((state) => ({
        ...state,
        records,
      }));
    }
  }, [
    state.keywords,
    state.perPage,
    state.sortField,
    state.sortOrder,
    state.currentPage,
    model.records,
  ]);

  const searchRecords = (records) => {
    if (!state.keywords) return records;
    return records.filter((record) => {
      let isMatch = false;
      model.columns.forEach((column) => {
        if (isMatch) return;
        const value = resolveRecord(record, column.field) || "";
        if (value.toLowerCase().includes(state.keywords.toLowerCase())) {
          isMatch = true;
        }
      });
      return isMatch;
    });
  };

  const sortRecords = (records) => {
    if (!state.sortField) return records;
    return records.sort((recordA, recordB) => {
      const valueA = resolveRecord(recordA, state.sortField) || "";
      const valueB = resolveRecord(recordB, state.sortField) || "";
      return valueA > valueB
        ? state.sortOrder === "desc"
          ? -1
          : +1
        : state.sortOrder === "desc"
        ? +1
        : -1;
    });
  };

  const handleSearch = (keywords) => {
    setState((state) => ({
      ...state,
      keywords,
    }));
  };

  const handleSort = (column) => {
    if (column.sortable === false) return;
    const { field } = column;
    const sortOrder = state.sortOrder
      ? field === state.sortField
        ? state.sortOrder === "asc"
          ? "desc"
          : ""
        : "asc"
      : "asc";

    const sortField = sortOrder === "" ? "" : column.field;
    setState((state) => ({
      ...state,
      sortOrder,
      sortField,
    }));
  };

  const handleChangePerPage = (perPage) => {
    setState((state) => ({
      ...state,
      perPage,
    }));
  };

  const handleOnChangePage = (currentPage) => {
    setState((state) => ({
      ...state,
      currentPage,
    }));
  };

  const renderTdContent = (record, column) => {
    if (column.component) {
      return column.component(record);
    } else {
      return resolveRecord(record, column.field) || "-";
    }
  };
  const handleAdd = (e) => {
    router.push(e);
    console.log("Info: Come from handleAdd");
    console.log(pathAdd);
  };
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between py-3 px-2">
        <div className="flex items-center  ">
          <div>
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="hs-table-search"
              id="hs-table-search"
              className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-primary  "
              placeholder="Search..."
              onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
          <div className="mx-5">
            <a
              onClick={() => handleAdd(pathAdd)}
              className="cursor-pointer inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:outline-none focus:ring-1 "
            >
              <span className=" inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-white bg-primary border border-gray-300 rounded-md sm:py-2">
                <div></div>
                <div className="">Tambah Data</div>
              </span>
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="">
            <button className=" inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:outline-none focus:ring-1">
              <span className=" inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </div>
                <div className="">Filters</div>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-1.5 w-full inline-block align-middle">
        <div className="p-2 min-w-full inline-block align-middle  ">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 table-fixed">
              <thead className="bg-gray-50">
                <tr>
                  {/* <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    No
                  </th>
                  {model.columns.map((column, index) => {
                    return (
                      <th
                        scope="col"
                        className={
                          column.sortable === false
                            ? ""
                            : "sortable " +
                              "px-6 py-1 text-xs font-bold text-left text-gray-500 uppercase cursor-pointer"
                        }
                        key={index}
                        onClick={() => handleSort(column)}
                      >
                        <div className="flex">
                          <span
                            className={
                              "px-6 py-1 text-xs font-bold text-left text-gray-500 uppercase cursor-pointer " +
                              (column.options?.header?.className || "")
                            }
                          >
                            {column.header}
                          </span>
                          {column.sortable === false ? (
                            ""
                          ) : (
                            <span
                              className={
                                "mx-2 text-gray-300" +
                                (column.field === state.sortField
                                  ? state.sortOrder
                                  : "")
                              }
                            >
                              <div className="flex justify-between ">
                                <FaChevronUp className="text-xs" />
                                <FaChevronDown className="text-xs" />
                              </div>
                            </span>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {state.records.map((record, indexI) => {
                  return (
                    <tr key={indexI}>
                      {/* <td className="py-3 pl-4">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="checkbox" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </td> */}
                      <td className="px-6 py-1 text-sm font-medium text-gray-800 break-normal">
                        {(state.currentPage - 1) * model.pagination.perPage +
                          indexI +
                          1}
                      </td>
                      {model.columns.map((column, indexJ) => {
                        return (
                          <td
                            key={indexI + "" + indexJ}
                            className="px-6 py-1 text-sm text-gray-800 break-normal"
                          >
                            {renderTdContent(record, column)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="ml-5 flex justify-between">
          <div className="w-20  ">
            <select
              className="py-2  pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
              value={state.perPage}
              onChange={(event) => handleChangePerPage(event.target.value)}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
          </div>
          <RxidPagination
            model={model.pagination}
            onChangePage={handleOnChangePage}
          />
        </div>
      </div>
    </div>
  );
};
