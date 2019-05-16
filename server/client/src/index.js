import React from 'react'
import ReactDOM from 'react-dom'

// The <Provider /> makes the Redux store available to any nested 
// components that have been wrapped in the connect() function.
// ref: https://react-redux.js.org/api/provider
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './App'
import reducers from './reducers'

// Redux store that holds the complete state tree of the app.
// There should only be a single store in your app.
// ref: https://redux.js.org/api/createstore
const store = createStore(() => reducers, {}, applyMiddleware())

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
)
