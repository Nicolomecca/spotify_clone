import { GET_SEARCH } from "../actions/actions";

const initialState = {
  results: [],
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer
