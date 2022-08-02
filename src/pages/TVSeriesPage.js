import React, { useEffect } from "react";
import useSearch from "../hooks/useSearch";
import { useSelector, useDispatch } from "react-redux";
import { getThumbnailData } from "../store/thunk";

import SearchBar from "../components/SearchBar/SearchBar";
import Page from "../UI/Page";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import Spinner from "../UI/Spinner";

function TVSeriesPage() {
  const {
    data: tvSeriesData,
    loading,
    error,
  } = useSelector(state => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThumbnailData("tv"));
  }, [dispatch]);

  const [queryValue, searchHandler] = useSearch();

  const resultSeries = tvSeriesData.filter(series =>
    series.title.toLowerCase().includes(queryValue.toLowerCase())
  );

  // JSX

  if (loading) return <Spinner />;

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <Page>
      <SearchBar placeholder="Search for TV Series" onSearch={searchHandler} />
      <Thumbnails thumbnailList={resultSeries} name="TV Series" />
    </Page>
  );
}

export default TVSeriesPage;
