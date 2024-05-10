import { configureStore, combineReducers } from '@reduxjs/toolkit'
import trackReducer from '../reducers/track'
import queryReducer from '../reducers/query'
import favouriteReducer from '../reducers/favourite'
import setTrackReducer from '../reducers/setTrack'

const mainReducer = combineReducers({
  track: trackReducer,
  search: queryReducer,
  favourite: favouriteReducer,
  setTrack: setTrackReducer,
})

const store = configureStore({
  reducer: mainReducer,
})

export default store
