import { SET_CURRENT_SONG } from "../actions/actions";
// Reducer per la canzone corrente
const initialSongState = {
  currentSong: null,
};

const songReducer = (state = initialSongState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return { ...state, currentSong: action.payload };
    default:
      return state;
  }
} 


export default songReducer