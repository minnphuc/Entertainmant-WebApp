import React from "react";

import classes from "./Page.module.css";

function Page(props) {
  return <div className={classes.page}>{props.children}</div>;
}

export default Page;
