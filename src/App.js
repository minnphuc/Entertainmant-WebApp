import React, { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookmarkAction } from "./store/bookmark-slice";

import "./App.css";

import NavBar from "./components/Navigation/NavBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TVSeriesPage from "./pages/TVSeriesPage";
import BookmarkPage from "./pages/BookmarkPage";
import NotFound from "./pages/NotFound";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const bookmarkData = JSON.parse(localStorage.getItem("bookmark"));

    if (bookmarkData !== null && isInitial)
      dispatch(bookmarkAction.loadBookmark(bookmarkData));

    isInitial = false;
  }, [dispatch]);

  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/movie" element={<MoviesPage />} />

        <Route path="/tv" element={<TVSeriesPage />} />

        <Route path="/bookmark" element={<BookmarkPage />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
