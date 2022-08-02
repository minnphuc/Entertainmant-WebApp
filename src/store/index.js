import { configureStore } from "@reduxjs/toolkit";

import showReducer from "./show-slice";
import bookmarkReducer from "./bookmark-slice";

const store = configureStore({
  reducer: { show: showReducer, bookmark: bookmarkReducer },
});

export default store;
