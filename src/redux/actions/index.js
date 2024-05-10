export const GET_TRACKS = 'GET_TRACKS'
export const UPDATE_QUERY = 'UPDATE_QUERY'

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
