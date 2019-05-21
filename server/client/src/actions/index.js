import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = () => {
  // Using redux-thunk we return a function
  // which includes dispatch 'action creator'
  // and is called once the async code is ready.
  return async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({
      type: FETCH_USER,
      payload: res.data
    })
  }
}
