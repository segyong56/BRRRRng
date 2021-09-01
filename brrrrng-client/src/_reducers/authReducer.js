import {
  SUCCESS_SIGNUP,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  ERROR_OCCURRED
} from "../_actions/types";

export default function auth (state = {}, action) {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        loginSuccess: action.payload
      };
    case SUCCESS_SIGNUP:
      return {
        ...state,
        register: action.payload
      };
    case SUCCESS_LOGOUT:
      return {
        ...state
      };
    case ERROR_OCCURRED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
