import React from 'react'

// A <Router> that uses the HTML5 history API 
// (pushState, replaceState, popstate event) 
// to keep your UI in sync with the URL.
// ref: https://reacttraining.com/react-router/web/api
import { BrowserRouter, Route } from 'react-router-dom'

import HeaderBar from './components/HeaderBar'

const DashboardView = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const LandingView = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <HeaderBar />

          <Route exact path="/" component={ LandingView }></Route>

          <Route exact path="/surveys" component={ DashboardView }></Route>

          <Route path="/surveys/new" component={ SurveyNew }></Route>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
