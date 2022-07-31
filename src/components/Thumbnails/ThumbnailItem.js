import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./ThumbnailItem.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w200";

const getRateColor = rate => {
  if (rate === 0) return null;

  if (rate >= 70) return "high";

  if (rate < 70 && rate >= 50) return "medium";

  if (rate < 50) return "low";
};

function ThumbnailItem(props) {
  const [isBookmarked, setIsBookmarked] = useState();

  const bookmarkHandle = () => {
    setIsBookmarked(state => !state);
  };

  const rateClasses = `${classes.rate} ${classes[getRateColor(props.rate)]}`;

  return (
    <div className={classes.card}>
      <Link className={classes.poster} to={`${props.id}`}>
        <img src={`${IMG_URL}/${props.url}`} alt="poster" />

        <div className={rateClasses}>
          {props.rate !== 0 ? `${props.rate}%` : "NR"}
        </div>
      </Link>

      <div className={classes.bookmark} onClick={bookmarkHandle}>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            stroke-width="1.5"
            fill={isBookmarked ? "#FFF" : "none"}
          />
        </svg>
      </div>

      <h3 className={classes.title}>
        <Link to={`${props.id}`}>{props.title}</Link>
      </h3>

      <p>{props.released}</p>
    </div>
  );
}

export default ThumbnailItem;
