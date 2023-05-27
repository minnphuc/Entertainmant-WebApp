import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { bookmarkAction } from "./store/bookmark/bookmark-slice";
import { loginWithStoredToken } from "./store/auth/auth-action";

import "./App.css";

import NavBar from "./components/Navigation/NavBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TVSeriesPage from "./pages/TVSeriesPage";
import BookmarkPage from "./pages/BookmarkPage";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";
import AuthPage from "./pages/Auth/AuthPage";

let isInitial = true;

function App() {
  const { isLogin } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginWithStoredToken());
  }, [dispatch]);

  useEffect(() => {
    const bookmarkData = JSON.parse(localStorage.getItem("bookmark"));

    if (bookmarkData !== null && isInitial)
      dispatch(bookmarkAction.loadBookmark(bookmarkData));

    isInitial = false;
  }, [dispatch]);

  return (
    <React.Fragment>
      {isLogin && <NavBar />}

      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />

        <Route
          path="/auth"
          element={!isLogin ? <AuthPage /> : <Navigate replace to="/home" />}
        />

        <Route
          path="/home"
          element={isLogin ? <HomePage /> : <Navigate replace to="/auth" />}
        />

        <Route
          path="/movie"
          element={isLogin ? <MoviesPage /> : <Navigate replace to="/auth" />}
        />

        <Route
          path="/tv"
          element={isLogin ? <TVSeriesPage /> : <Navigate replace to="/auth" />}
        />

        <Route
          path="/bookmark"
          element={isLogin ? <BookmarkPage /> : <Navigate replace to="/auth" />}
        />

        <Route
          path="/:media/:id"
          element={isLogin ? <DetailPage /> : <Navigate replace to="/auth" />}
        />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
