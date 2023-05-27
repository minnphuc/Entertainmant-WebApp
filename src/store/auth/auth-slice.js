import { createSlice } from "@reduxjs/toolkit";

const init = {
  token: "",
  user: 0,
  isLogin: false,
};

const authState = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    login(state, action) {
      const { payload } = action;
      const { token, user } = payload;

      state.token = token;
      state.user = user;
      state.isLogin = !!token;
    },

    logout(state) {
      state.token = null;
      state.user = null;
      state.isLogin = false;
    },
  },
});

export const authActions = authState.actions;

export default authState.reducer;
