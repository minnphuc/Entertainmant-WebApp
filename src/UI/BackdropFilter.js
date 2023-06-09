import React from "react";

import classes from "./BackdropFilter.module.css";

function Backdrop(props) {
  return (
    <div onClick={props.onClick} className={classes.backdrop}>
      {props.children}
    </div>
  );
}

export default Backdrop;
