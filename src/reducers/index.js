import { combineReducers } from "redux";
import authReducer from "./authReducers";
import regentChartReducer from "./regentChartReducer";

export default combineReducers({
  auth: authReducer,
  regentChart: regentChartReducer
});