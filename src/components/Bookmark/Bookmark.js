import React, { useState } from "react";

import classes from "./Bookmark.module.css";

function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkHandle = () => {
    setIsBookmarked(state => !state);
  };

  return (
    <div className={classes.bookmark} onClick={bookmarkHandle}>
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="#FFF"
          strokeWidth="1.5"
          fill={isBookmarked ? "#FFF" : "none"}
        />
      </svg>
    </div>
  );
}

export default Bookmark;
