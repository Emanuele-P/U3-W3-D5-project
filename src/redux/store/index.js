import { configureStore, combineReducers } from '@reduxjs/toolkit'
import trackReducer from '../reducers/track'
import queryReducer from '../reducers/query'
import favouriteReducer from '../reducers/favourite'

const mainReducer = combineReducers({
  track: trackReducer,
  search: queryReducer,
  favourite: favouriteReducer,
})

const store = configureStore({
  reducer: mainReducer,
})

export default store
