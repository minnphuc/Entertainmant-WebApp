import React from "react";

import classes from "./Bookmark.module.css";

function Bookmark(props) {
  const clickHandler = () => {
    props.onBookmark();
  };

  return (
    <div className={classes.bookmark} onClick={clickHandler}>
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="#FFF"
          strokeWidth="1.5"
          fill={props.isBookmarked ? "#FFF" : "none"}
        />
      </svg>
    </div>
  );
}

export default Bookmark;
