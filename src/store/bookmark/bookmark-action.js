import { showAction } from "../show/show-slice";
import { detailShowAction } from "../detail-show/detail-show-slice";
import { bookmarkAction } from "./bookmark-slice";

import { UPDATE_ME_SERVICE } from "../../config";

export const addBookmarkData = bookmarkedItem => {
  return (dispatch, getState) => {
    dispatch(showAction.toggleBookmark(bookmarkedItem.id));
    dispatch(detailShowAction.toggleBookmark(bookmarkedItem.id));
    //prettier-ignore
    dispatch(bookmarkAction.addBookmark({ ...bookmarkedItem, isBookmarked: true }));

    const { token } = getState().auth;
    const updatedBookmark = getState().bookmark;

    localStorage.setItem("bookmark", JSON.stringify(updatedBookmark));

    fetch(UPDATE_ME_SERVICE, {
      method: "PATCH",
      body: JSON.stringify({
        bookmark: updatedBookmark.map(show => show.id),
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
};

export const removeBookmarkData = idBookmarked => {
  return (dispatch, getState) => {
    dispatch(showAction.toggleBookmark(idBookmarked));
    dispatch(detailShowAction.toggleBookmark(idBookmarked));
    dispatch(bookmarkAction.removeBookmark(idBookmarked));

    const { token } = getState().auth;
    const updatedBookmark = getState().bookmark;

    localStorage.setItem("bookmark", JSON.stringify(updatedBookmark));

    fetch(UPDATE_ME_SERVICE, {
      method: "PATCH",
      body: JSON.stringify({
        bookmark: updatedBookmark.map(show => show.id),
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
};
