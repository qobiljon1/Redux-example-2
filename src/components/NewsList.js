import { useHttp } from "../hook/useHttp";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newsFetching, newsFetched, newsFetchingError } from "../redux/actions";
import Spinner from "./Spinner";
import Error from "./Error";
import NewsListItem from "./NewsListItem";

export default function NewsList() {
  const { filteredNews, filtersLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(newsFetching());
    request("http://localhost:3001/news")
      .then((data) => dispatch(newsFetched(data)))
      .catch(() => dispatch(newsFetchingError));

    // eslint-disable-next-line
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0)
      return <h4 className="text-center mt5">News does not exist</h4>;
    return arr.map(({ id, ...props }) => {
      return <NewsListItem key={id} {...props} />;
    });
  };

  const element = renderNewsList(filteredNews);

  return <ul>{element}</ul>;
}
