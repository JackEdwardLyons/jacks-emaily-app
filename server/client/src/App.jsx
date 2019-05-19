import React, { Component } from 'react'

// A <Router> that uses the HTML5 history API 
// (pushState, replaceState, popstate event) 
// to keep your UI in sync with the URL.
// ref: https://reacttraining.com/react-router/web/api
import { BrowserRouter, Route } from 'react-router-dom'

import HeaderBar from './components/HeaderBar'

const DashboardView = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const LandingView = () => <h2>Landing</h2>

class App extends Component {

  componentDidMount () {
    
  }

  render () {
    return (
      <main>
        <BrowserRouter>
          <section>
            <HeaderBar />
            <section className="container mt-4">
              <Route exact path="/" component={ LandingView }></Route>
              <Route exact path="/surveys" component={ DashboardView }></Route>
              <Route path="/surveys/new" component={ SurveyNew }></Route>
            </section>
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

export default App
