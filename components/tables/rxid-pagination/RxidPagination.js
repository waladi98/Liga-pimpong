import { useEffect, useState } from "react";
import { resolvePagination } from "./resolve-pagination";
// import "./RxidPagination.scss";

export const RxidPagination = ({ model, onChangePage }) => {
  const [state, setState] = useState({
    currentPage: model.currentPage,
    pagination: {},
    length: 0,
  });

  useEffect(() => {
    const pagination = resolvePagination({
      perPage: model.perPage,
      totalRecord: model.totalRecord,
      currentPage: state.currentPage,
      size: model.size,
    });
    setState((state) => ({
      ...state,
      pagination,
      length: pagination.endPage - (pagination.startPage - 1),
    }));
  }, [model.totalRecord, state.currentPage]);

  const setCurrentPage = (currentPage) => {
    setState((state) => ({
      ...state,
      currentPage,
    }));
    if (onChangePage) {
      onChangePage(currentPage);
    }
  };

  const handleChangePage = (currentPage) => {
    if (state.currentPage === currentPage) return;
    setCurrentPage(currentPage);
  };

  const handleBackPage = () => {
    const currentPage = state.currentPage - 1;
    if (currentPage < state.pagination.firstPage) return;
    setCurrentPage(currentPage);
  };

  const handleNextPage = () => {
    const currentPage = state.currentPage + 1;
    if (currentPage > state.pagination.lastPage) return;
    setCurrentPage(currentPage);
  };

  return (
    <ul className="inline-flex items-center -space-x-px">
      <li className="pagination-item">
        <a
          className={
            "cursor-pointer block py-2 px-3 ml-0 leading-tight text-gray-500  bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 " +
            (state.currentPage === 1 ? "cursor-not-allowed " : "")
          }
          onClick={() => handleChangePage(1)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
      <li className="pagination-item">
        <a
          className={
            "cursor-pointer block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 " +
            (state.currentPage === 1 ? "cursor-not-allowed" : "")
          }
          onClick={handleBackPage}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
      {state.pagination.startPage > 1 ? (
        <li className="pagination-item">
          <a
            className="cursor-pointer block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            onClick={() => handleChangePage(1)}
          >
            1
          </a>
        </li>
      ) : (
        ""
      )}
      {state.pagination.startPage > 2 ? (
        <li className="pagination-item">
          <a className="cursor-pointer block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
            ...
          </a>
        </li>
      ) : (
        ""
      )}
      {Array(state.length)
        .fill(0)
        .map((value, index) => {
          const page = value + index + state.pagination.startPage;
          return (
            <li className="pagination-item" key={page}>
              <a
                className={
                  "cursor-pointer block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 " +
                  (state.currentPage === page ? "bg-primary text-white" : "")
                }
                onClick={() => handleChangePage(page)}
              >
                {page}
              </a>
            </li>
          );
        })}

      {state.currentPage < state.pagination.lastPage - 3 ? (
        <li className="pagination-item">
          <a className="cursor-pointer block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
            ...
          </a>
        </li>
      ) : (
        ""
      )}

      {state.currentPage < state.pagination.lastPage - 2 ? (
        <li className="pagination-item">
          <a
            className="cursor-pointer block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            onClick={() => handleChangePage(state.pagination.lastPage)}
          >
            {state.pagination.lastPage}
          </a>
        </li>
      ) : (
        ""
      )}

      <li className="pagination-item">
        <a
          className={
            "cursor-pointer block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  " +
            (state.currentPage === state.pagination.lastPage
              ? "cursor-not-allowed"
              : "")
          }
          onClick={handleNextPage}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </li>

      <li className="pagination-item">
        <a
          className={
            "cursor-pointer block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  " +
            (state.currentPage === state.pagination.lastPage
              ? "cursor-not-allowed"
              : "")
          }
          onClick={() => handleChangePage(state.pagination.lastPage)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  );
};
