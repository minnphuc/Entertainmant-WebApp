import { detailShowAction } from "./detail-show-slice";

import { API_URL } from "../../config";
import { API_KEY } from "../../config";
import { getJSON } from "../../helper";

const transformData = (data, media) => {
  return {
    title: media === "tv" ? data.name : data.title,
    tagline: data.tagline,
    media: media,
    poster: data.poster_path,
    backdrop: data.backdrop_path,
    rating: Math.ceil(data.vote_average * 10),
    genres: data.genres.map(genre => genre.name),
    createdBy: data.created_by
      ? data.created_by.map(creator => creator.name)
      : data.production_companies[0]?.name,
    country: data.production_countries[0]?.name,
    released: media === "tv" ? data.first_air_date : data.release_date,
    overview: data.overview,
    homepage: data.homepage ? data.homepage : "//:0",
  };
};

export const getDetailData = function (media, id) {
  return async dispatch => {
    try {
      dispatch(detailShowAction.sendingRequest());

      const data = await getJSON(
        `${API_URL}/${media}/${id}?api_key=${API_KEY}`
      );

      const finalData = transformData(data, media);

      console.log(finalData);

      dispatch(detailShowAction.loadDetailData(finalData));
    } catch (error) {
      dispatch(detailShowAction.error(error.message));
    }
  };
};
