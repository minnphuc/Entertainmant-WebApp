import React from "react";
import searchIcon from "../../icons/icon-search.svg";

import classes from "./SearchBar.module.css";

function SearchBar(props) {
  const changeHandler = e => {
    props.onSearch(e.target.value);
  };

  return (
    <div className={classes["search-bar"]}>
      <label htmlFor="search" style={{ display: "none" }}></label>

      <img src={searchIcon} alt="search" />
      <input
        id="search"
        type="text"
        placeholder={props.placeholder}
        onChange={changeHandler}
      />
    </div>
  );
}

export default SearchBar;
