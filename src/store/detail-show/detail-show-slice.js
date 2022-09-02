import { createSlice } from "@reduxjs/toolkit";

const initState = {
  data: {},
  loading: false,
  error: null,
};

const detailShowSlice = createSlice({
  name: "detailShow",
  initialState: initState,
  reducers: {
    sendingRequest(state) {
      state.loading = true;
    },

    error(state, action) {
      const errorMsg = action.payload;

      state.loading = false;
      state.error = errorMsg;
    },

    loadDetailData(state, action) {
      const data = action.payload;

      state.data = data;
      state.loading = false;
    },

    toggleBookmark(state, action) {
      const id = action.payload;

      if (id === state.data.id)
        state.data.isBookmarked = !state.data.isBookmarked;
    },
  },
});

export const detailShowAction = detailShowSlice.actions;

export default detailShowSlice.reducer;
