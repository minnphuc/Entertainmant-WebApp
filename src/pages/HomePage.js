import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrendingData } from "../store/thunk";

import SearchBar from "../components/SearchBar/SearchBar";
import Trending from "../components/Trending/Trending";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import Page from "../UI/Page";
import Spinner from "../UI/Spinner";

function HomePage() {
  const { data, loading, error } = useSelector(state => state.trending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingData());
  }, [dispatch]);

  if (loading) return <Spinner />;

  if (error) return <p>{error}</p>;

  return (
    <Page>
      <SearchBar />
      <Trending trendingList={data.slice(0, 10)} />
      <Thumbnails thumbnailList={data.slice(10)} />
    </Page>
  );
}

export default HomePage;
