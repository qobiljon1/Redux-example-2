import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  newsLoadingStatus: "",
};

const news = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsFetching: (state) => {
      state.newsLoadingStatus = "loading";
    },
    newsFetched: (state, action) => {
      state.newsLoadingStatus = "";
      state.news = action.payload;
    },
    newsFetchingError: (state) => {
      state.newsLoadingStatus = "error";
    },
    newsCreated: (state, action) => {
      state.news.push(action.payload);
    },
    deleteNews: (state, action) => {
      state.news.filter((s) => s.id !== action.payload);
    },
  },
});

const { actions, reducer } = news;

export default reducer;

export const {
  newsFetching,
  newsFetched,
  newsFetchingError,
  newsCreated,
  deleteNews,
} = actions;
