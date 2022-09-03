import { showAction } from "./show-slice";

import { API_URL } from "../../config";
import { API_KEY } from "../../config";
import { getJSON } from "../../helper";

const transformData = (data, type) => {
  return data.results.map(movie => {
    const media = type === "trending" ? movie.media_type : type;
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

export const getThumbnailData = function (media = "trending") {
  return async function (dispatch, getState) {
    try {
      dispatch(showAction.sendingRequest());

      const url =
        media === "trending"
          ? `${API_URL}/trending/all/week?api_key=${API_KEY}`
          : `${API_URL}/${media}/popular?api_key=${API_KEY}`;

      const data = await getJSON(url);
      const transformedData = transformData(data, media);

      // Compare data with bookmarked list
      const bookmarkShows = getState().bookmark;

      transformedData.forEach(ele => {
        if (bookmarkShows.some(show => show.id === ele.id))
          ele.isBookmarked = true;
      });

      dispatch(showAction.loadData(transformedData));
    } catch (error) {
      dispatch(showAction.error(error.message));
    }
  };
};
