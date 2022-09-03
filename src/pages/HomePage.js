import React, { useEffect } from "react";
import useSearch from "../hooks/useSearch";
import { useSelector, useDispatch } from "react-redux";
import { getThumbnailData } from "../store/show/show-action";

import SearchBar from "../components/SearchBar/SearchBar";
import Trending from "../components/Trending/Trending";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import Page from "../UI/Page";
import Spinner from "../UI/Spinner";

function HomePage() {
  const { data: trendData, loading, error } = useSelector(state => state.show);
  const dispatch = useDispatch();
  const [queryValue, searchHandler] = useSearch("");

  useEffect(() => {
    dispatch(getThumbnailData());
  }, [dispatch]);

  // Selector Function

  const trending = trendData.slice(0, 10);
  const recommended = trendData.slice(10);

  const resultTrending = trending.filter(show =>
    show.title.toLowerCase().includes(queryValue.toLowerCase())
  );

  const resultRecommended = recommended.filter(show =>
    show.title.toLowerCase().includes(queryValue.toLowerCase())
  );

  // JSX

  if (loading) return <Spinner />;

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <Page>
      <SearchBar
        placeholder={"Search for movies or TV series"}
        onSearch={searchHandler}
      />

      <Trending trendingList={resultTrending} />
      <Thumbnails
        thumbnailList={resultRecommended}
        name="Recommended for you"
      />
    </Page>
  );
}

export default HomePage;
