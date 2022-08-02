import React from "react";
import { useSelector } from "react-redux";

import Page from "../UI/Page";
import Thumbnails from "../components/Thumbnails/Thumbnails";

function Bookmark() {
  const bookmarkedShows = useSelector(state => state.bookmark);

  return (
    <Page>
      <Thumbnails
        thumbnailList={bookmarkedShows}
        name="Your bookmarked shows"
      />
    </Page>
  );
}

export default Bookmark;
