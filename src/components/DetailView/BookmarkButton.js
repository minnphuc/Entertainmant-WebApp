import React from "react";

import classes from "./BookmarkButton.module.css";
import iconBookmark from "../../icons/icon-bookmark-full.svg";
import iconChecked from "../../icons/icon-checked.svg";

function BookmarkButton(props) {
  const clickHandler = () => {
    props.onBookmark();
  };

  const btnClasses = `${classes["bookmark-btn"]} ${
    props.isBookmarked ? classes.bookmarked : ""
  }`;

  return (
    <button className={btnClasses} onClick={clickHandler}>
      <div className={classes["bookmark-btn-content"]}>
        <img src={iconChecked} alt="icon" />
        <p>Bookmarked</p>
      </div>

      <div className={classes["bookmark-btn-content"]}>
        <img src={iconBookmark} alt="icon" />
        <p>Add to bookmark</p>
      </div>
    </button>
  );
}

export default BookmarkButton;
