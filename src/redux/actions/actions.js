export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_TO_FAVOURITE = 'REMOVE_TO_FAVOURITE'
export const GET_SEARCH = 'GET_SEARCH'
export const setCurrentSong = (song) => ({
    type: SET_CURRENT_SONG,
    payload: song,
  });

  export const addToFavourite = (song) => ({
    type: ADD_TO_FAVOURITE,
    payload: song,
  });

  export const removeToFavourite = (song) => ({
    type : REMOVE_TO_FAVOURITE,
    payload: song
  });

  export const getAlbumAction = (query) => {
    return (dispatch) => {
      fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
        .then((response) => {
          if (response.ok) {
            return response.json(); 
          } else {
            throw new Error('Network response was not ok'); 
          }
        })
        .then((data) => {
          dispatch({
            type: GET_SEARCH,
            payload: data,
          });
        })
        .catch((err) => {
          console.error('Fetch error:', err); 
        });
    };
  };