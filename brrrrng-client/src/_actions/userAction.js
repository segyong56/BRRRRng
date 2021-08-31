import axios from "axios";
import {
  GET_USERINFO,

  DELETE_USER,

  ADD_TO_MYCARLIST,
  REMOVE_FROM_MYCARLIST,
  ADD_TO_ADDRESSLIST,
  REMOVE_FROM_ADDRESTLIST,
} from "./types";

const API_URL = "https://api.brrrrng.ga"

export const getUserInfo = (accessToken) => {
  //ec2-52-78-43-100.ap-northeast-2.compute.amazonaws.com/user/:id/info
  const userInfo = axios.post(`${API_URL}/info`, accessToken).then(response => response.data.userInfo);

  return {
    type: GET_USERINFO,
    payload: userInfo,
  };

  
};

export const deleteUser = (accessToken) => {
  const resResult = axios.delete(`http://localhost:4000/user/${accessToken}/delete`).then(response => response.data.success)

  return {
    type: DELETE_USER,
    payload: resResult
  }
}

export const addToMycarList = (accessToken, data) => {
  const resResult = axios
    .put(`http://localhost:4000/user/${accessToken}/edit`, data)
    .then((result) => result.data.success);

  return {
    type: ADD_TO_MYCARLIST,
    payload: resResult,
  };
};

export const removeFromMycarList = (accessToken, idx) => {
  const resResult = axios
    .put(`http://localhost:4000/user/${accessToken}/edit`, idx)
    .then((result) => result.data.success);

  return {
    type: REMOVE_FROM_MYCARLIST,
    payload: resResult,
  };
};

export const addToMyaddressList = (id, data) => {
  const resResult = axios
    .put(`http://localhost:4000/user/${id}/edit`, data)
    .then((result) => result.data.success);

  return {
    type: ADD_TO_ADDRESSLIST,
    payload: resResult,
  };
};

export const removeFromMyaddressList = (id, idx) => {
  const resResult = axios
    .put(`http://localhost:4000/user/${id}/delete`, idx)
    .then((result) => result.data.success);

  return {
    type: REMOVE_FROM_ADDRESTLIST,
    payload: resResult,
  };
};
