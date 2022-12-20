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
    <ul className="pagination-list">
      <li className="pagination-item">
        <a
          className={
            "pagination-link " + (state.currentPage === 1 ? "disabled" : "")
          }
          onClick={() => handleChangePage(1)}
        >
          <em className="fa-solid fa-angles-left" />
        </a>
      </li>
      <li className="pagination-item">
        <a
          className={
            "pagination-link " + (state.currentPage === 1 ? "disabled" : "")
          }
          onClick={handleBackPage}
        >
          <em className="fas fa-chevron-left" />
        </a>
      </li>
      {state.pagination.startPage > 1 ? (
        <li className="pagination-item">
          <a className="pagination-link" onClick={() => handleChangePage(1)}>
            1
          </a>
        </li>
      ) : (
        ""
      )}
      {state.pagination.startPage > 2 ? (
        <li className="pagination-item">
          <a className="pagination-link separator">...</a>
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
                  "pagination-link " +
                  (state.currentPage === page ? "active" : "")
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
          <a className="pagination-link separator">...</a>
        </li>
      ) : (
        ""
      )}

      {state.currentPage < state.pagination.lastPage - 2 ? (
        <li className="pagination-item">
          <a
            className="pagination-link"
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
            "pagination-link " +
            (state.currentPage === state.pagination.lastPage ? "disabled" : "")
          }
          onClick={handleNextPage}
        >
          <em className="fas fa-chevron-right" />
        </a>
      </li>

      <li className="pagination-item">
        <a
          className={
            "pagination-link " +
            (state.currentPage === state.pagination.lastPage ? "disabled" : "")
          }
          onClick={() => handleChangePage(state.pagination.lastPage)}
        >
          <em className="fa-solid fa-angles-right" />
        </a>
      </li>
    </ul>
  );
};
