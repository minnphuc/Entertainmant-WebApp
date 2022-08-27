import React from "react";

import classes from "./Backdrop.module.css";

const BACKDROP_URL = `https://image.tmdb.org/t/p/original`;

function Backdrop(props) {
  return (
    <div className={classes["backdrop-poster"]}>
      <div className={classes["backdrop-filter"]}></div>
      <img src={`${BACKDROP_URL}${props.backdropURL}`} alt="backdrop" />
    </div>
  );
}

export default Backdrop;
