import axios from 'axios'
import { FETCH_USER } from './types'

const fetchUser = () => {
  // Using redux-thunk we return a function
  // which includes dispatch 'action creator'
  // and is called once the async code is ready.
  return function dispatchFetchUser (dispatch) {
    axios.get('/api/current_user')
      .then(res => {
        dispatch({ type: 'FETCH_USER', payload: res })
      })
      .catch(e => console.log('dispatch error: ', e))
  }
}
