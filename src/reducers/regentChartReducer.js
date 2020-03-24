import {
  GET_REGENT_CHARTS_SUCCESS,
  GET_REGENT_CHARTS_FAILED,
  GET_REGENT_CHARTS_PENDING,
  CREATE_REGENT_CHART_SUCCESS,
  UPDATE_REGENT_CHARTS_SUCCESS,
  RESET_SUCCESS_MESSAGE
} from '../actions/types';

const initialState = {
  dataCollection: [],
  loading: false,
  error: '',
  showSuccessMessage: false
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
    case CREATE_REGENT_CHART_SUCCESS: {
      return {
        ...initialState,
        ...action.payload.data
      };
    }
    case UPDATE_REGENT_CHARTS_SUCCESS: {
      return {
        ...state,
        showSuccessMessage: true
      };
    }
    case RESET_SUCCESS_MESSAGE: {
      return {
        ...state,
        showSuccessMessage: false
      };
    }
    default:
      return state;
  }
}

export default regentChartReducer;
