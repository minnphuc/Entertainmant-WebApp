import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getThumbnailData } from "../store/thunk";

import SearchBar from "../components/SearchBar/SearchBar";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import Page from "../UI/Page";
import Spinner from "../UI/Spinner";

function MoviesPage() {
  const { data: moviesData, loading, error } = useSelector(state => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThumbnailData("movie"));
  }, [dispatch]);

  if (loading) return <Spinner />;

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <Page>
      <SearchBar placeholder={"Search for Movies"} />
      <Thumbnails thumbnailList={moviesData} />
    </Page>
  );
}

export default MoviesPage;
