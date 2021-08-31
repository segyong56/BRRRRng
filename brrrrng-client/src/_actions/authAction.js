import {
  SUCCESS_SIGNUP,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  AUTH_USER,
} from "./types.js";

import axios from "axios";
const API_URL = "https://api.brrrrng.ga";

export const signupRequest = (data) => {
  const request = axios
    .post(`${API_URL}/auth/signup`, data)
    .then((response) => response.data);

  return {
    type: SUCCESS_SIGNUP,
    payload: request,
  };
};

export const loginRequest = (data) => {
  const request = axios
    .post(`${API_URL}/auth/login`, data, { withCredentials: true })
    .then((response) => {
      return response.data;
    });
  console.log(request);
  return {
    type: SUCCESS_LOGIN,
    payload: request,
  };
};

<<<<<<< HEAD
export const logoutRequest = () => {
  const request = axios
    .get(`${API_URL}/auth/logout`, { withCredentials: true })
    .then((response) => {
      console.log(response);
      return response.data;
    });
=======
export const logoutRequest = (accessToken) => {

  const request = axios.get(`${API_URL}/auth/logout`,{withCredentials: true}, {
    headers: {
      authorization: accessToken
    }
  }).then(response => {
    console.log(response)
    return response.data
  })
>>>>>>> d295a628a7a6a2d2bc4ffd88f6b36c9b8ccfd0d2

  return {
    type: SUCCESS_LOGOUT,
    payload: request,
  };
};

export const auth = () => {
  const request = axios
    .get(`${API_URL}/auth/authtest`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
};
