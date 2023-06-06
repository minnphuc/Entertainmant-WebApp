import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: [],
  reducers: {
    addBookmark(state, action) {
      const bookmarkedItem = action.payload;

      state.push(bookmarkedItem);
    },

    removeBookmark(state, action) {
      const removedBookmarkID = action.payload;

      const removedBookmarkIndex = state.findIndex(
        bookmark => bookmark.id === removedBookmarkID
      );

      state.splice(removedBookmarkIndex, 1);
    },

    loadBookmark(state, action) {
      const loadedBookmark = action.payload;

      loadedBookmark.forEach(bookmark => state.push(bookmark));
    },

    refreshBookmark(state) {
      state.length = 0;
    },
  },
});

export const bookmarkAction = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
