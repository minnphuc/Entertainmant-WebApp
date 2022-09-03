import { showAction } from "../show/show-slice";
import { detailShowAction } from "../detail-show/detail-show-slice";
import { bookmarkAction } from "./bookmark-slice";

export const addBookmarkData = bookmarkedItem => {
  return (dispatch, getState) => {
    dispatch(showAction.toggleBookmark(bookmarkedItem.id));
    dispatch(detailShowAction.toggleBookmark(bookmarkedItem.id));
    //prettier-ignore
    dispatch(bookmarkAction.addBookmark({ ...bookmarkedItem, isBookmarked: true }));

    localStorage.setItem("bookmark", JSON.stringify(getState().bookmark));
  };
};

export const removeBookmarkData = idBookmarked => {
  return (dispatch, getState) => {
    dispatch(showAction.toggleBookmark(idBookmarked));
    dispatch(detailShowAction.toggleBookmark(idBookmarked));
    dispatch(bookmarkAction.removeBookmark(idBookmarked));

    localStorage.setItem("bookmark", JSON.stringify(getState().bookmark));
  };
};
