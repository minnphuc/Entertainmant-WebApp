import React from "react";
import { Link } from "react-router-dom";

import Bookmark from "../Bookmark/Bookmark";
import classes from "./ThumbnailItem.module.css";
import movieIcon from "../../icons/icon-category-movie-dark.svg";
import tvIcon from "../../icons/icon-category-tv-dark.svg";

const IMG_URL = "https://image.tmdb.org/t/p/w200";

const getRateColor = rate => {
  if (rate === 0) return null;

  if (rate >= 70) return "high";

  if (rate < 70 && rate >= 50) return "medium";

  if (rate < 50) return "low";
};

function ThumbnailItem(props) {
  const mediaType =
    props.media === "movie" ? (
      <p className={classes.media}>
        <img src={movieIcon} alt="movie" />
        Movie
      </p>
    ) : (
      <p className={classes.media}>
        <img src={tvIcon} alt="tv" />
        TV Series
      </p>
    );

  const rateClasses = `${classes.rate} ${classes[getRateColor(props.rate)]}`;

  return (
    <div className={classes.card}>
      <Link className={classes.poster} to={`${props.id}`}>
        <img src={`${IMG_URL}/${props.url}`} alt="poster" />

        <div className={rateClasses}>
          {props.rate !== 0 ? `${props.rate}%` : "NR"}
        </div>
      </Link>

      <Bookmark />

      <h3 className={classes.title}>
        <Link to={`${props.id}`}>{props.title}</Link>
      </h3>

      {mediaType}
    </div>
  );
}

export default ThumbnailItem;
