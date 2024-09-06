export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';


export const setCurrentSong = (song) => ({
    type: SET_CURRENT_SONG,
    payload: song,
  });

  export const addToFavourite = (song) => ({
    type: ADD_TO_FAVOURITE,
    payload: song,
  });