import React from "react";
import useSearch from "../hooks/useSearch";
import { useSelector } from "react-redux";

import Page from "../UI/Page";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import SearchBar from "../components/SearchBar/SearchBar";
import EmptyMsg from "../UI/EmptyMsg";

function Bookmark() {
  const bookmarkedShows = useSelector(state => state.bookmark);
  const [queryValue, searchHandler] = useSearch();

  // Selector Function

  const resultBookmark = bookmarkedShows.filter(show =>
    show.title.toLowerCase().includes(queryValue.toLowerCase())
  );

  const bookmarkedMovies = resultBookmark.filter(show => show.media === "movie");
  const bookmarkedSeries = resultBookmark.filter(show => show.media === "tv");

  return (
    <Page>
      <SearchBar
        placeholder="Search for your bookmarked shows"
        onSearch={searchHandler}
      />

      <Thumbnails thumbnailList={bookmarkedMovies} name="Your bookmarked Movies" />
      {bookmarkedMovies.length === 0 && <EmptyMsg media={"movie"} />}

      <Thumbnails thumbnailList={bookmarkedSeries} name="Your bookmarked TV Series" />
      {bookmarkedSeries.length === 0 && <EmptyMsg media={"tv"} />}
    </Page>
  );
}

export default Bookmark;
