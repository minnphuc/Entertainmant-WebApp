// API DOC: https://developers.themoviedb.org/3/getting-started/introduction

import { showActions } from "./show-slice";

import { API_URL } from "../config";
import { API_KEY } from "../config";
import { getJSON } from "../helper";

const transformData = (data, type) => {
  return data.results.map(movie => {
    const media = type === undefined ? movie.media_type : type;
    const title = media === "tv" ? movie.name : movie.title;

    return {
      id: movie.id,
      posterUrl: movie.poster_path,
      media: media,
      title: title,
      rating: movie.vote_average,
    };
  });
};

export const getTrendingData = function () {
  return async function (dispatch) {
    try {
      dispatch(showActions.sendingRequest());

      const data = await getJSON(
        `${API_URL}/trending/all/week?api_key=${API_KEY}`
      );
      const transformedData = transformData(data);

      dispatch(showActions.loadData(transformedData));
    } catch (error) {
      dispatch(showActions.error(error.message));
    }
  };
};

export const getThumbnailData = function (media) {
  return async function (dispatch) {
    try {
      dispatch(showActions.sendingRequest());

      const data = await getJSON(
        `${API_URL}/${media}/popular?api_key=${API_KEY}`
      );
      const transformedData = transformData(data, media);

      dispatch(showActions.loadData(transformedData));
    } catch (error) {
      dispatch(showActions.error(error.message));
    }
  };
};
