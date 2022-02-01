import { createReducer } from "@reduxjs/toolkit";
import {
  filterFetching,
  filterFetched,
  filterError,
  activeButton,
} from "../actions";
const initialState = {
  filters: [],
  filtersLoadingStatus: "",
  activeFilter: "all",
};

// const filter = createReducer(
//   initialState,
//   {
//     [filterFetching]: (state) => {
//       state.filtersLoadingStatus = "loading";
//     },
//     [filterFetched]: (state, action) => {
//       state.filters = action.payload;
//       state.filtersLoadingStatus = "";
//     },
//     [filterError]: (state) => {
//       state.filtersLoadingStatus = "error";
//     },
//     [activeButton]: (state, action) => {
//       state.activeFilter = action.payload;
//     },
//   },
//   [],
//   (state) => state
// );
const filter = createReducer(initialState, (builder) => {
  builder
    .addCase(filterFetching, (state) => {
      state.filtersLoadingStatus = "loading";
    })
    .addCase(filterFetched, (state, action) => {
      state.filters = action.payload;
      state.filtersLoadingStatus = "";
    })
    .addCase(filterError, (state) => {
      state.filtersLoadingStatus = "error";
    })
    .addCase(activeButton, (state, action) => {
      state.activeFilter = action.payload;
    })
    .addDefaultCase(() => {});
});

// const filter = (state = initialState, action) => {
//   switch (action.type) {
//     case "FILTER_FETCHING":
//       return {
//         ...state,
//         filtersLoadingStatus: "loading",
//       };
//     case "FILTER_FETCHED":
//       return {
//         ...state,
//         filters: action.payload,
//         filtersLoadingStatus: "",
//       };
//     case "FILTERS_ERROR":
//       return {
//         ...state,
//         filtersLoadingStatus: "error",
//       };
//     case "ACTIVE_BUTTON":
//       return {
//         ...state,
//         activeFilter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default filter;
