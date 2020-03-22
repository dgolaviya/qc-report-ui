import setAuthToken from "../utils/setAuthToken";

import {
  LOGIN_USER,
  SET_USER_AUTHORIZED,
  REGISTER_USER,
  GET_REGENT_CHARTS,
  UPDATE_REGENT_CHARTS,
  CREATE_REGENT_CHART
} from "./types";

// Register User
export const registerUser = (userData) => {
  const url = '/register';
  const payload = {
    action: REGISTER_USER,
    method: 'POST',
    url,
    data: userData
  };
  return { type: "API_INVOCATION", payload };
};

export const loginUser = userData => {
  const url = '/login';
  const payload = {
    action: LOGIN_USER,
    method: 'POST',
    url,
    data: userData
  };
  return { type: "API_INVOCATION", payload };
};

export const logoutUser = () => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  return { type: SET_USER_AUTHORIZED, payload: { isAuthenticated: false } }
};

export const getRegantChartDetails = (regantChart) => {
  const url = '/getRegantChartDetails';
  const payload = {
    action: GET_REGENT_CHARTS,
    method: 'POST',
    url,
    data: regantChart
  };
  return { type: "API_INVOCATION", payload };
};

export const updateRegantChartDetails = (regantChart) => {
  const url = '/updateRegantChart';
  const payload = {
    action: UPDATE_REGENT_CHARTS,
    method: 'POST',
    url,
    data: regantChart
  };
  return { type: "API_INVOCATION", payload };
};

export const createRegentChart = (regantChart) => {
  const url = '/createRegantChart';
  const payload = {
    action: CREATE_REGENT_CHART,
    method: 'POST',
    url,
    data: regantChart
  };
  return { type: "API_INVOCATION", payload };
};