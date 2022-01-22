export const newsFetching = () => {
  return {
    type: "NEWS_FETCHING",
  };
};

export const newsFetched = (news) => {
  return {
    type: "NEWS_FETCHED",
    payload: news,
  };
};

export const newsFetchingError = () => {
  return {
    type: "NEWS_FETCING_ERROR",
  };
};
export const newsCreated = (news) => {
  return {
    type: "NEWS_CREATED",
    payload: news,
  };
};
export const filterFetching = () => {
  return {
    type: "FILTER_FETCHING",
  };
};
export const filterFetched = (fetching) => {
  return {
    type: "FILTER_FETCHED",
    payload: fetching,
  };
};
export const filterError = () => {
  return {
    type: "FILTERS_ERROR",
  };
};
export const activeButton = (name) => {
  return {
    type: "ACTIVE_BUTTON",
    payload: name,
  };
};
