import React from "react";
import { useHttp } from "../hook/useHttp";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterFetching,
  filterFetched,
  filterError,
  activeButton,
} from "../redux/actions";
import Spinner from "./Spinner";
import Error from "./Error";
import classNames from "classnames";

function NewsFilter() {
  const { filters, filtersLoadingStatus, activeFilter } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(filterFetching());
    request("http://localhost:3001/filters")
      .then((data) => dispatch(filterFetched(data)))
      .catch(() => dispatch(filterError));

    // eslint-disable-next-line
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <Error />;
  }

  const renderFilter = (arr) => {
    if (arr.length === 0)
      return <h4 className="text-center mt-5">Filters doesn't found</h4>;
    return arr.map(({ name, label, className }) => {
      const btnClassName = classNames("btn", className, {
        "active": name === activeFilter,
      });

      return (
        <button
          key={name}
          id={name}
          className={btnClassName}
          onClick={() => dispatch(activeButton(name))}
        >
          {label}
        </button>
      );
    });
  };

  const filterButton = renderFilter(filters);

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter by category</p>
        <div className="btn-group">{filterButton}</div>
      </div>
    </div>
  );
}

export default NewsFilter;
