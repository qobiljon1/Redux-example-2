// import { createReducer } from "@reduxjs/toolkit";
// import {
//   newsFetching,
//   newsFetched,
//   newsFetchingError,
//   newsCreated,
//   deleteNews,
// } from "../actions";
// const initialState = {
//   news: [],
//   newsLoadingStatus: "",
// };
// const news = createReducer(
//   initialState,
//   {
//     [newsFetching]: (state) => {
//       state.newsLoadingStatus = "loading";
//     },
//     [newsFetched]: (state, action) => {
//       state.newsLoadingStatus = "";
//       state.news = action.payload;
//     },
//     [newsFetchingError]: (state) => {
//       state.newsLoadingStatus = "error";
//     },
//     [newsCreated]: (state, action) => {
//       state.news.push(action.payload);
//     },
//     [deleteNews]: (state, action) => {
//       state.news.filter((s) => s.id !== action.payload);
//     },
//   },
//   [],
//   (state) => state
// );

// const news = createReducer(initialState, (builder) => {
//   builder
//     .addCase(newsFetching, (state) => {
//       state.newsLoadingStatus = "loading";
//     })
//     .addCase(newsFetched, (state, action) => {
//       state.newsLoadingStatus = "";
//       state.news = action.payload;
//     })
//     .addCase(newsFetchingError, (state) => {
//       state.newsLoadingStatus = "error";
//     })
//     .addCase(newsCreated, (state, action) => {
//       state.news.push(action.payload);
//     })
//     .addCase(deleteNews, (state, action) => {
//       state.news.filter((s) => s.id !== action.payload);
//     })
//     .addDefaultCase(() => {});
// });

// const news = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEWS_FETCHING":
//       return {
//         ...state,
//         newsLoadingStatus: "loading",
//       };
//     case "NEWS_FETCHED":
//       return {
//         ...state,
//         news: action.payload,
//         filteredNews:
//           state.activeFilter === "all"
//             ? action.payload
//             : action.payload.filter((s) => s.category === state.activeFilter),
//         newsLoadingStatus: "",
//       };
//     case "NEWS_FETCING_ERROR":
//       return {
//         ...state,
//         newsLoadingStatus: "error",
//       };
//     case "NEWS_CREATED":
//       return {
//         ...state,
//         news: [...state.news, action.payload],
//       };
//     case "DELETE_ITEM":
//       return {
//         ...state,
//         news: state.news.filter((s) => s.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default news;
