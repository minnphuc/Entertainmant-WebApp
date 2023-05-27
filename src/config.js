// API DOC: https://developers.themoviedb.org/3/getting-started/introduction

// To get poster img: https://image.tmdb.org/t/p/w300/{poster_path}
// poster_path: from API response, w300 = width 300

export const TIME_OUT = 10;
export const JWT_EXPIRES_IN = 3600000;
export const API_URL = "https://api.themoviedb.org/3";
export const API_KEY = "40a83ffba11bd9299a9e6a2c60b74c41";

const url = "http://127.0.0.1:3000/api/v1/";

// AUTH
export const SIGNUP_SERVICE = `${url}users/signup`;
export const LOGIN_SERVICE = `${url}users/login`;
export const CHANGE_PASSWORD_SERVICE = `${url}users/change-password`;

// USER
export const UPDATE_ME_SERVICE = `${url}users/updateMe`;

// COMMENT
export const CREATE_COMMENT_SERVICE = `${url}comments`;

export const UPDATE_COMMENT_SERVICE = commentId => `${url}comments/${commentId}`;
export const GET_COMMENTS_OF_POST = postId => `${url}comments?post=${postId}`;
export const COUNT_COMMENTS_OF_POST = postId => `${url}comments/count?post=${postId}`;

// REPLY COMMENT
export const CREATE_REPLY_SERVICE = `${url}replyComments`;

export const UPDATE_REPLY_SERVICE = replyId => `${url}replyComments/${replyId}`;

export const GET_REPLIES_OF_COMMENT = commentId =>
  `${url}replyComments?comment=${commentId}`;

export const COUNT_REPLIES_OF_COMMENT = commentId =>
  `${url}replyComments/count?comment=${commentId}`;
