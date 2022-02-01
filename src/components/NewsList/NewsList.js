import { useHttp } from "../../hook/useHttp";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFunc, fetching } from "../../redux/actions";
import Spinner from "../Spinner";
import Error from "../Error";
import NewsListItem from "../NewsListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createSelector } from "reselect";
import "../style/newsList.css";

export default function NewsList() {
  const filteredNewsSelected = createSelector(
    (state) => state.filter.activeFilter,
    (state) => state.news.news,
    (filter, news) => {
      if (filter === "all") {
        console.log("render");
        return news;
      } else {
        return news.filter((s) => s.category === filter);
      }
    }
  );
  const filteredNews = useSelector(filteredNewsSelected);
  const filtersLoadingStatus = useSelector(
    (state) => state.filter.filtersLoadingStatus
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetching(request));

    // eslint-disable-next-line
  }, []);

  // ============================================ ITEM DELETE START ======================================== //

  const onDelete = useCallback((id) => {
    dispatch(deleteFunc(request, id));

    //eslint-disable-next-line
  }, []);

  // ============================================ ITEM DELETE END ======================================== //

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0)
      return (
        <CSSTransition timeout={500} classNames="item">
          <h4 className="text-center mt5">News does not exist</h4>
        </CSSTransition>
      );
    return arr
      .map(({ id, ...props }) => {
        return (
          <CSSTransition key={id} timeout={500} classNames="item">
            <NewsListItem onDelete={() => onDelete(id)} {...props} />
          </CSSTransition>
        );
      })
      .reverse();
  };

  const element = renderNewsList(filteredNews);

  return <TransitionGroup component="ul">{element}</TransitionGroup>;
}
