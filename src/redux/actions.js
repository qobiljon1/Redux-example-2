import { createAction } from "@reduxjs/toolkit";
import {
  newsFetching,
  deleteNews,
  newsFetched,
} from "../components/NewsList/news_slice";


export const fetching = (request) => (dispatch) => {
  dispatch(newsFetching());
  request("http://localhost:3001/news")
    .then((data) => dispatch(newsFetched(data)))
    .catch(() => dispatch("NEWS_FETCING_ERROR"));
};
export const filterFunc = (request) => (dispatch) => {
  dispatch(filterFetching());
  request("http://localhost:3001/filters")
    .then((data) => dispatch(filterFetched(data)))
    .catch(() => dispatch(filterError));
};
export const deleteFunc = (request, id) => (dispatch) => {
  request(`http://localhost:3001/news/${id}`, "DELETE")
    .then(dispatch(deleteNews(id)))
    .catch((err) => console.log(err));
};
// export const newsFetching = createAction("NEWS_FETCHING");
// export const newsFetched = createAction("NEWS_FETCHED");
// export const newsFetchingError = createAction("NEWS_FETCING_ERROR");
// export const newsCreated = createAction("NEWS_CREATED");
// export const deleteNews = createAction("DELETE_ITEM");
export const filterFetching = createAction("FILTER_FETCHING");
export const filterFetched = createAction("FILTER_FETCHED");
export const filterError = createAction("FILTERS_ERROR");
export const activeButton = createAction("ACTIVE_BUTTON");
