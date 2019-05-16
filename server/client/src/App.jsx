import React from 'react'

// A <Router> that uses the HTML5 history API 
// (pushState, replaceState, popstate event) 
// to keep your UI in sync with the URL.
// ref: https://reacttraining.com/react-router/web/api
import { BrowserRouter, Route } from 'react-router-dom'

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Route path="/" component={ Landing }></Route>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
