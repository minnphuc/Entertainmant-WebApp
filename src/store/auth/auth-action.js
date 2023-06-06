import { authActions } from "./auth-slice";
import { bookmarkAction } from "../bookmark/bookmark-slice";

import { LOGIN_SERVICE, SIGNUP_SERVICE } from "../../config";
import { JWT_EXPIRES_IN } from "../../config";

let logoutTimerId;

//? ----HELPER FUNCTION----

const calcRemainingTime = expiredTime => {
  const currentTime = new Date().getTime();
  const expirationTime = new Date(expiredTime).getTime();

  const remainingTime = expirationTime - currentTime;

  return remainingTime;
};

const getStoredToken = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const expiredTime = localStorage.getItem("expiredTime");

  const remainingTime = calcRemainingTime(expiredTime);

  // Less than 1 minute
  if (remainingTime < 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expiredTime");
    return null;
  }

  return {
    token: token,
    user: user,
    remainingTime: remainingTime,
  };
};

const login = (dispatch, token, user) => {
  // Login
  dispatch(authActions.login({ token: token, user: user }));

  // Set timer for expired token
  const expiredTime = new Date(Date.now() + JWT_EXPIRES_IN);
  const remainingTime = calcRemainingTime(expiredTime);
  logoutTimerId = setTimeout(() => {
    dispatch(logoutRequest());
  }, remainingTime);

  // Store auth info
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("expiredTime", expiredTime);
};

//? ----THUNK----

export const logoutRequest = function () {
  return dispatch => {
    dispatch(authActions.logout());
    dispatch(bookmarkAction.refreshBookmark());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expiredTime");
    localStorage.removeItem("bookmark");
    clearTimeout(logoutTimerId);
  };
};

export const loginRequest = function (email, password) {
  return async dispatch => {
    try {
      const res = await fetch(LOGIN_SERVICE, {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = await res.json();

      if (!res.ok) throw new Error(data.message);

      const { token, user } = data;

      login(dispatch, token, user);
    } catch (error) {
      console.log(error);
    }
  };
};

export const signupRequest = function (newUser) {
  return async dispatch => {
    try {
      const res = await fetch(SIGNUP_SERVICE, {
        method: "POST",
        body: JSON.stringify({
          email: newUser.email,
          password: newUser.password,
          passwordConfirm: newUser.passwordConfirm,
          name: newUser.name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = await res.json();

      if (!res.ok) throw new Error(data.message);

      const { token, user } = data;

      login(dispatch, token, user);
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginWithStoredToken = function () {
  return dispatch => {
    const storedAuthInfo = getStoredToken();
    if (storedAuthInfo === null) return;
    const { token, user, remainingTime } = storedAuthInfo;

    dispatch(authActions.login({ token: token, user: user }));
    console.log(`Token expired in: ${remainingTime / 1000 / 60} minutes`);
    // setTimeout with negative delay will auto use the minimum value (zero)
    logoutTimerId = setTimeout(() => {
      dispatch(logoutRequest());
    }, remainingTime);
  };
};
