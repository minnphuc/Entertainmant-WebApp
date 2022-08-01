import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrendingData } from "../store/thunk";

import SearchBar from "../components/SearchBar/SearchBar";
import Trending from "../components/Trending/Trending";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import Page from "../UI/Page";
import Spinner from "../UI/Spinner";

function HomePage() {
  const {
    data: trendingData,
    loading,
    error,
  } = useSelector(state => state.show);

  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getTrendingData());
  }, [dispatch]);

  const searchHandler = queryValue => {
    setQuery(queryValue);
  };

  const resultTrendingData = trendingData.filter(show =>
    show.title.toLowerCase().includes(query.toLowerCase())
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
      <Trending trendingList={resultTrendingData.slice(0, 10)} />
      <Thumbnails thumbnailList={resultTrendingData.slice(10)} />
    </Page>
  );
}

export default HomePage;
