import { configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";
import news from "../components/NewsList/news_slice";
import filter from "./reducer/filter";

//  =========================== ENHANCER ================================ //

// const enhancer =
//   (createStore) =>
//   (...args) => {
//     const store = createStore(...args);
//     const oldDispatch = store.dispatch;
//     store.dispatch = (action) => {
//       if (typeof action === "string") {
//         return oldDispatch({ type: action });
//       } else {
//         return oldDispatch(action);
//       }
//     };
//     return store;
//   };

//  =========================== MIDDLEWARE ================================ //

const stringMiddleware = () => (next) => (action) => {
  typeof action === "string" ? next({ type: action }) : next(action);
};

//  =========================== STORE ================================ //

export const store = configureStore({
  reducer: { filter, news },
  middleware: (getDefultMiddleware) =>
    getDefultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
// export const store = createStore(
//   combineReducers({ news, filter }),
//   compose(
//     applyMiddleware(ReduxThunk, stringMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
//   // compose(
//   // enhancer,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   // )
// );
