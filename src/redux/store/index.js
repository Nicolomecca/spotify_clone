import { configureStore,combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourite'
import songReducer from '../reducers/song'


const bigReducer = combineReducers({
  favourite : favouriteReducer,
  song: songReducer ,
})
const store = configureStore({
    reducer: bigReducer,
  })

  export default store
