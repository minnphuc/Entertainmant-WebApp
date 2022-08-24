import { detailShowAction } from "./detail-show-slice";

import { API_URL } from "../../config";
import { API_KEY } from "../../config";
import { getJSON } from "../../helper";

export const getDetailData = function (media, id) {
  return async dispatch => {
    try {
      dispatch(detailShowAction.sendingRequest());

      const data = await getJSON(
        `${API_URL}/${media}/${id}?api_key=${API_KEY}`
      );

      dispatch(detailShowAction.loadDetailData(data));
    } catch (error) {
      dispatch(detailShowAction.error(error.message));
    }
  };
};
