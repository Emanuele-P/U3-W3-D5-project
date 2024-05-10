import { SET_TRACK } from '../actions'

const initialState = {
  currentTrack: null,
}

const setTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACK:
      console.log('Updating track data in reducer:', action.payload)
      return { ...state, currentTrack: action.payload }
    default:
      return state
  }
}

export default setTrackReducer
