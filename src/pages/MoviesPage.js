import React, { useEffect } from "react";
import useSearch from "../hooks/useSearch";
import { useSelector, useDispatch } from "react-redux";
import { getThumbnailData } from "../store/thunk";

import SearchBar from "../components/SearchBar/SearchBar";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import Page from "../UI/Page";
import Spinner from "../UI/Spinner";

function MoviesPage() {
  const { data: moviesData, loading, error } = useSelector(state => state.show);
  const dispatch = useDispatch();
  const [queryValue, searchHandler] = useSearch();

  useEffect(() => {
    dispatch(getThumbnailData("movie"));
  }, [dispatch]);

  const resultMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(queryValue.toLowerCase())
  );

  // JSX

  if (loading) return <Spinner />;

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <Page>
      <SearchBar placeholder={"Search for Movies"} onSearch={searchHandler} />

      <Thumbnails thumbnailList={resultMovies} name="Movies" />
    </Page>
  );
}

export default MoviesPage;
