import { createSlice } from "@reduxjs/toolkit";

const initState = {
  data: [],
  error: null,
  loading: false,
};

const trendingSlice = createSlice({
  name: "trending",
  initialState: initState,
  reducers: {
    loadTrending(state, action) {
      const trendingList = action.payload;

      state.loading = false;
      state.data = trendingList;
    },

    sendingRequest(state) {
      state.loading = true;
    },

    error(state, action) {
      const errorMsg = action.payload;

      state.loading = false;
      state.error = errorMsg;
    },
  },
});

export const trendingActions = trendingSlice.actions;

export default trendingSlice.reducer;
