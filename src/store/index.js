import { configureStore } from "@reduxjs/toolkit";

import showReducer from "./show/show-slice";
import bookmarkReducer from "./bookmark/bookmark-slice";
import detailShowReducer from "./detail-show/detail-show-slice";
import authReducer from "./auth/auth-slice";

const store = configureStore({
  reducer: {
    show: showReducer,
    bookmark: bookmarkReducer,
    detailShow: detailShowReducer,
    auth: authReducer,
  },
});

export default store;
