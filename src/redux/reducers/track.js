import { GET_TRACKS } from '../actions'

const initialState = {
  results: [],
}

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        results: action.payload,
      }
    default:
      return state
  }
}

export default trackReducer
