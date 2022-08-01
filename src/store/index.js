import { configureStore } from "@reduxjs/toolkit";

import showReducer from "./show-slice";

const store = configureStore({
  reducer: { show: showReducer },
});

export default store;
