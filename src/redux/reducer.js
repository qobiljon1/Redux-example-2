const initialState = {
  news: [],
  newsLoadingStatus: "",
  filters: [],
  filtersLoadingStatus: "",
  activeFilter: "all",
  filteredNews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_FETCHING":
      return {
        ...state,
        newsLoadingStatus: "loading",
      };
    case "NEWS_FETCHED":
      return {
        ...state,
        news: action.payload,
        filteredNews:
          state.activeFilter === "all"
            ? action.payload
            : action.payload.filter((s) => s.category === state.activeFilter),
        newsLoadingStatus: "",
      };
    case "NEWS_FETCING_ERROR":
      return {
        ...state,
        newsLoadingStatus: "error",
      };
    case "NEWS_CREATED":
      const newsCreatedObj = [...state.news, action.payload];
      return {
        ...state,
        news: newsCreatedObj,
        filteredNews:
          state.activeFilter === "all"
            ? newsCreatedObj
            : newsCreatedObj.filter((s) => s.category === state.activeFilter),
      };
    case "NEWS_DELETE":
      return {};
    case "FILTER_FETCHING":
      return {
        ...state,
        filtersLoadingStatus: "loading",
      };
    case "FILTER_FETCHED":
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: "",
      };
    case "FILTERS_ERROR":
      return {
        ...state,
        filtersLoadingStatus: "error",
      };
    case "ACTIVE_BUTTON":
      return {
        ...state,
        activeFilter: action.payload,
        filteredNews:
          action.payload === "all"
            ? state.news
            : state.news.filter((obj) => obj.category === action.payload),
      };
    case "DELETE_ITEM":
      const newsList = state.news.filter((s) => s.id !== action.payload);
      return {
        ...state,
        news: newsList,
        filteredNews:
          state.activeFilter === "all"
            ? newsList
            : newsList.filter((s) => s.category === state.activeFilter),
      };
    default:
      return state;
  }
};

export default reducer;
