import { configureStore, combineReducers } from '@reduxjs/toolkit'
import trackReducer from '../reducers/track'
import queryReducer from '../reducers/query'

const mainReducer = combineReducers({
  track: trackReducer,
  search: queryReducer,
})

const store = configureStore({
  reducer: mainReducer,
})

export default store
