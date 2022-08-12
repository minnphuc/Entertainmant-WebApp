import { Link } from "react-router-dom";

import classes from "./EmptyMsg.module.css";

const emptyBookmarkMsg = function (props) {
  return (
    <div className={classes["empty-msg"]}>
      <p>
        You haven't bookmarked any {props.type === "tv" ? "TV Series" : "movie"}{" "}
        yet!
      </p>

      <Link to={`/${props.type}`}>
        Go bookmark some {props.type === "tv" ? "TV Series" : "movie"}
      </Link>
    </div>
  );
};

export default emptyBookmarkMsg;
