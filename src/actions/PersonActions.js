import { ACTION_LOADING, ACTION_SUCCESS, ACTION_ERROR } from '../constants'

export const fetchPersonDetails = username =>
  async dispatch => {
    dispatch({ type: ACTION_LOADING })
    try {
      const query = await fetch(`https://api.github.com/users/${username}`)
      const result = await query.json()
      console.log(result)
      dispatch({
        type: ACTION_SUCCESS,
        payload: result
      })
    } catch (e) {
      dispatch({ type: ACTION_ERROR })
    }
  }
