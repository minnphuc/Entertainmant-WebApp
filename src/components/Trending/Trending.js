import React from "react";

import classes from "./Trending.module.css";
import ThumbnailItem from "../Thumbnails/ThumbnailItem";

function Trending(props) {
  const trendingList = props.trendingList.map(show => (
    <ThumbnailItem
      key={show.id}
      id={show.id}
      posterUrl={show.posterUrl}
      title={show.title}
      media={show.media}
      rate={show.rate}
      isBookmarked={show.isBookmarked}
      type="trending"
    />
  ));

  return (
    <div className={classes.section}>
      <h2>Trending</h2>

      <div className={classes.trending}>{trendingList}</div>
    </div>
  );
}

export default Trending;
