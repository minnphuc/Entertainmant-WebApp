// API DOC: https://developers.themoviedb.org/3/getting-started/introduction

import { trendingActions } from "./Trending/trending-slice";

const API_KEY = "40a83ffba11bd9299a9e6a2c60b74c41";
const API_URL = "https://api.themoviedb.org/3";

export const getTrendingData = function () {
  return async function (dispatch) {
    try {
      dispatch(trendingActions.sendingRequest());

      const response = await fetch(
        `${API_URL}/trending/all/week?api_key=${API_KEY}`
      );

      if (!response.ok) throw new Error("Something went wrong !");

      const data = await response.json();

      const transformedData = data.results.map(movie => {
        return {
          id: movie.id,
          posterUrl: movie.poster_path,
          title: movie.media_type === "tv" ? movie.name : movie.title,
          media: movie.media_type,
          released: movie.release_date,
          rating: movie.vote_average,
        };
      });

      dispatch(trendingActions.loadTrending(transformedData));
    } catch (error) {
      dispatch(trendingActions.error(error.message));
    }
  };
};
