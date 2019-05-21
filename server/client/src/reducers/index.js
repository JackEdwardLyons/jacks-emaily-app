
// ref: https://redux.js.org/recipes/structuring-reducers/using-combinereducers
import { combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
  auth: authReducer
})
