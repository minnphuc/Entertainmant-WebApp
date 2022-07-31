import React from "react";
import { Link } from "react-router-dom";

import classes from "./TrendingItem.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w300";

function TrendingItem(props) {
  return (
    <div className={classes.container}>
      <Link className={classes.poster} to={`${props.id}`}>
        <img src={`${IMG_URL}/${props.url}`} alt="thumbnail" />
      </Link>

      <div className={classes.bookmark}>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            stroke-width="1.5"
            fill="none"
          />
        </svg>
      </div>

      <h3 className={classes.title}>
        <Link to={`${props.id}`}>{props.title}</Link>
      </h3>

      <p className={classes.released}>{props.released}</p>
    </div>
  );
}

export default TrendingItem;
