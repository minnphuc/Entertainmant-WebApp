import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import NavBar from "./components/Navigation/NavBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TVSeriesPage from "./pages/TVSeriesPage";
import BookmarkPage from "./pages/BookmarkPage";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/movie" element={<MoviesPage />} />

        <Route path="/tv" element={<TVSeriesPage />} />

        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
