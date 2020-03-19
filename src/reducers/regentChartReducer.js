import { GET_REGENT_CHARTS_SUCCESS } from '../actions/types';

const initialState = {
    dataCollection: []
  };

const regentChartReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_REGENT_CHARTS_SUCCESS: {
          console.log('action', action.payload.data)
        return {
          ...state,
          ...action.payload.data,
          loading: false
        };
      }
      default:
        return state;
    }
  }
  
  export default regentChartReducer;
