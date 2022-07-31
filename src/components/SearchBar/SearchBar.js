import React from "react";
import searchIcon from "../../icons/icon-search.svg";

import classes from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <div className={classes["search-bar"]}>
      <label htmlFor="search" style={{ display: "none" }}></label>

      <img src={searchIcon} alt="search" />
      <input
        id="search"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default SearchBar;
