// API DOC: https://developers.themoviedb.org/3/getting-started/introduction

import { showAction } from "./show-slice";

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
      rate: Math.ceil(movie.vote_average * 10),
      isBookmarked: false,
    };
  });
};

export const getTrendingData = function () {
  return async function (dispatch) {
    try {
      dispatch(showAction.sendingRequest());

      const data = await getJSON(
        `${API_URL}/trending/all/week?api_key=${API_KEY}`
      );
      const transformedData = transformData(data);

      dispatch(showAction.loadData(transformedData));
    } catch (error) {
      dispatch(showAction.error(error.message));
    }
  };
};

export const getThumbnailData = function (media) {
  return async function (dispatch) {
    try {
      dispatch(showAction.sendingRequest());

      const data = await getJSON(
        `${API_URL}/${media}/popular?api_key=${API_KEY}`
      );
      const transformedData = transformData(data, media);

      dispatch(showAction.loadData(transformedData));
    } catch (error) {
      dispatch(showAction.error(error.message));
    }
  };
};
