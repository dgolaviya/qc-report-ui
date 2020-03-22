import {
  GET_REGENT_CHARTS_SUCCESS,
  GET_REGENT_CHARTS_FAILED,
  GET_REGENT_CHARTS_PENDING
} from '../actions/types';

const initialState = {
  dataCollection: [],
  loading: false,
  error: ''
};

const regentChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGENT_CHARTS_PENDING: {
      return {
        ...initialState,
        loading: true
      }
    }
    case GET_REGENT_CHARTS_SUCCESS: {
      return {
        ...initialState,
        ...action.payload.data
      };
    }
    case GET_REGENT_CHARTS_FAILED: {
      return {
        ...initialState,
        error: action.payload.response.response.data.message
      };
    }
    default:
      return state;
  }
}

export default regentChartReducer;
