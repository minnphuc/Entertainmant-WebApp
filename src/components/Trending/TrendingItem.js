import React from "react";
import { Link } from "react-router-dom";

import Bookmark from "../Bookmark/Bookmark";
import classes from "./TrendingItem.module.css";
import movieIcon from "../../icons/icon-category-movie.svg";
import tvIcon from "../../icons/icon-category-tv.svg";

const IMG_URL = "https://image.tmdb.org/t/p/w300";

function TrendingItem(props) {
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

  return (
    <div className={classes.container}>
      <Link className={classes.poster} to={`${props.id}`}>
        <img src={`${IMG_URL}/${props.url}`} alt="thumbnail" />
      </Link>

      <Bookmark />

      <h3 className={classes.title}>
        <Link to={`${props.id}`}>{props.title}</Link>
      </h3>

      {mediaType}
    </div>
  );
}

export default TrendingItem;
