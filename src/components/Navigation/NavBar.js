import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../icons/logo.svg";
import homeIcon from "../../icons/icon-nav-home.svg";
import movieIcon from "../../icons/icon-nav-movies.svg";
import tvIcon from "../../icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../../icons/icon-nav-bookmark.svg";
import tmdbLogo from "../../icons/logo-tmdb.svg";

import classes from "./NavBar.module.css";

function NavBar() {
  const { user } = useSelector(state => state.auth);

  console.log(user);

  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <img src={logo} alt="Logo" className={classes.logo} />
        </li>

        <li>
          <div className={classes["icon-list"]}>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <img src={homeIcon} alt="Home" />
            </NavLink>

            <NavLink
              to="/movie"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <img src={movieIcon} alt="Movie" />
            </NavLink>

            <NavLink
              to="/tv"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <img src={tvIcon} alt="TV" />
            </NavLink>

            <NavLink
              to="/bookmark"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <img src={bookmarkIcon} alt="Bookmark" />
            </NavLink>
          </div>
        </li>

        <li>
          <div className={classes.avatar}>
            <img src={user?.photo} alt="Avatar" />
          </div>
        </li>

        <li>
          <div className={classes.contribute}>
            <p>Powered by</p>
            <img src={tmdbLogo} alt="TMDB" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
