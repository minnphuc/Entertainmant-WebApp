import { Link } from "react-router-dom";

import classes from "./EmptyMsg.module.css";

const emptyBookmarkMsg = function (props) {
  const media = props.media === "tv" ? "TV Series" : "Movie";

  return (
    <div className={classes["empty-msg"]}>
      <p>You haven't bookmarked any {media} yet!</p>

      <Link to={`/${props.media}`}>Go bookmark some {media}</Link>
    </div>
  );
};

export default emptyBookmarkMsg;
