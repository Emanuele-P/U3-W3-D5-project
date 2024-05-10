export const GET_TRACKS = 'GET_TRACKS'
export const UPDATE_QUERY = 'UPDATE_QUERY'
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'

export const getTracksAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      )
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: GET_TRACKS,
          payload: data,
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateQueryAction = (query) => ({
  type: UPDATE_QUERY,
  payload: query,
})

export const addToFavouriteAction = (id) => ({
  type: ADD_TO_FAVOURITE,
  payload: id,
})

export const removeFromFavouriteAction = (id) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: id,
})
