import { configureStore } from "@reduxjs/toolkit";

import trendingReducer from "./Trending/trending-slice";

const store = configureStore({
  reducer: { trending: trendingReducer },
});

export default store;
