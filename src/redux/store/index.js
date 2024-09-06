import { configureStore } from '@reduxjs/toolkit'
import songReducer from '../reducers'

const store = configureStore({
    reducer: songReducer,
  })

  export default store
