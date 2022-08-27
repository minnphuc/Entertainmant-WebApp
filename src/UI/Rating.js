import React from "react";

import classes from "./Rating.module.css";

const getRatingColor = rate => {
  if (rate === 0) return null;

  if (rate >= 70) return "high";

  if (rate < 70 && rate >= 50) return "medium";

  if (rate < 50) return "low";
};

function Rating(props) {
  //prettier-ignore
  const rateClasses = `${classes.rate} ${classes[getRatingColor(props.rating)]}`;

  return (
    <div className={rateClasses} style={props.style}>
      {props.rating !== 0 ? `${props.rating}%` : "NR"}
    </div>
  );
}

export default Rating;
