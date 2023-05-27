import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addBookmarkData,
  removeBookmarkData,
} from "../../store/bookmark/bookmark-action";

import Rating from "../../UI/Rating";

import classes from "./Detail.module.css";
import iconPlay from "../../icons/icon-play.svg";
import BookmarkButton from "./BookmarkButton";

const IMG_URL = `https://image.tmdb.org/t/p/w400`;

function Detail(props) {
  const detail = props.detail;
  const dispatch = useDispatch();

  const [showTrailer, setShowTrailer] = useState(false);

  if (!detail.title) return;

  const bookmarkHandler = () => {
    if (!detail.isBookmarked)
      dispatch(
        addBookmarkData({
          id: detail.id,
          posterUrl: detail.posterUrl,
          title: detail.title,
          rate: detail.rating,
          media: detail.media,
        })
      );

    if (detail.isBookmarked) dispatch(removeBookmarkData(detail.id));
  };

  const watchTrailer = () => setShowTrailer(true);

  return (
    <>
      {showTrailer && detail.trailerId && (
        <iframe
          width="500"
          height="315"
          src={`https://www.youtube.com/embed/${detail.trailerId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <div className={classes["detail-container"]}>
        <div className={classes.poster}>
          <img src={`${IMG_URL}${detail.posterUrl}`} alt="poster" />

          <button onClick={watchTrailer} className={classes["play-btn"]}>
            <img src={iconPlay} alt="play" />
            WATCH NOW
          </button>
        </div>

        <div className={classes.header}>
          <p className={classes.title}>{detail.title}</p>
          <p className={classes.tagline}>{detail.tagline}</p>

          <Link to={`/${detail.media}`} className={classes.media}>
            {detail.media === "tv" ? "TV Series" : "Movie"}
          </Link>

          <Rating rating={detail.rating} style={{ position: "static" }} />

          <div className={classes.genres}>
            <BookmarkButton
              onBookmark={bookmarkHandler}
              isBookmarked={detail.isBookmarked}
            />

            <div className={classes["genres-detail"]}>{detail.genres.join(", ")}</div>
          </div>
        </div>

        <div className={classes.content}>
          <p className={classes.info}>
            <span>CREATED BY</span>
            {detail.media === "tv" ? detail.createdBy.join(", ") : detail.createdBy}
          </p>

          <p className={classes.info}>
            <span>COUNTRY</span>
            {detail.country}
          </p>

          <p className={classes.info}>
            <span>RELEASES</span>
            {detail.released}
          </p>

          <div className={classes.overview}>{detail.overview}</div>
        </div>
      </div>
    </>
  );
}

export default Detail;
