import { createSlice } from "@reduxjs/toolkit";

const initState = {
  data: [],
  error: null,
  loading: false,
};

// State to store shows data

const showSlice = createSlice({
  name: "show",
  initialState: initState,
  reducers: {
    loadData(state, action) {
      const showList = action.payload;

      state.loading = false;
      state.data = showList;
    },

    sendingRequest(state) {
      state.loading = true;
    },

    error(state, action) {
      const errorMsg = action.payload;

      state.loading = false;
      state.error = errorMsg;
    },

    toggleBookmark(state, action) {
      const showID = action.payload;

      const show = state.data.find(show => show.id === showID);

      if (!show) return;

      show.isBookmarked = !show.isBookmarked;
    },
  },
});

export const showAction = showSlice.actions;

export default showSlice.reducer;
