import { ADD_TO_FAVOURITE } from '../actions/actions';

const initialFavouriteState = {
    list: [],
  };
  const favouriteReducer = (state = initialFavouriteState, action) => {
    switch (action.type) {
      case ADD_TO_FAVOURITE:
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      default:
        return state;
    }
  };
  export default favouriteReducer