let initialState = {
    apiInfo: []
  };
  
  
  function apiInfo(state=initialState, action) {
    switch(action.type) {
    case 'GET_INFO':
      return { ...state, loading: true };
    case 'FETCH_INFO':
      return {
        ...state,
        productItems: [...state.apiInfo, action.payload.data],
        loading: false
      };
  
    default:
      return state;
    }
  }
  
  export default apiInfo;