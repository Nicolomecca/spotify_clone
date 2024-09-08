import { configureStore,combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourite'
import songReducer from '../reducers/song'
import searchReducer from '../reducers/search'


const bigReducer = combineReducers({
  favourite : favouriteReducer,
  song: songReducer ,
  search : searchReducer,

})
const store = configureStore({
    reducer: bigReducer,
  })

  export default store
