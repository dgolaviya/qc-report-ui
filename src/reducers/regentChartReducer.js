import { GET_REGENT_CHARTS_SUCCESS } from '../actions/types';

const initialState = {
    dataCollection: []
  };

// export default (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case GET_REGENT_CHARTS_SUCCESS:
//             {
//                 console.log('Payload', payload);
//                 return { ...state, ...payload.data.data }
//             }
//         default:
//             return state
//     }
// }

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
