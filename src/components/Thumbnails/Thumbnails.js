import React from "react";
import ThumbnailItem from "./ThumbnailItem";
import EmptyMsg from "../../UI/EmptyMsg";

import classes from "./Thumbnails.module.css";

function Thumbnails(props) {
  const showList = props.thumbnailList.map(show => (
    <ThumbnailItem
      key={show.id}
      id={show.id}
      posterUrl={show.posterUrl}
      title={show.title}
      rate={show.rate}
      media={show.media}
      isBookmarked={show.isBookmarked}
      type="regular"
    />
  ));

  return (
    <section className={classes.section}>
      <h2>{props.name}</h2>

      <div className={classes.container}>
        {props.thumbnailList.length !== 0 && showList}
        {props.thumbnailList.length === 0 && <EmptyMsg type={props.type} />}
      </div>
    </section>
  );
}

export default Thumbnails;
