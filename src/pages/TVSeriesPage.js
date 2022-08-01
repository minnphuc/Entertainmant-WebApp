import React, { useEffect } from "react";

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

  if (loading) return <Spinner />;

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <Page>
      <SearchBar placeholder="Search for TV Series" />
      <Thumbnails thumbnailList={tvSeriesData} />
    </Page>
  );
}

export default TVSeriesPage;
