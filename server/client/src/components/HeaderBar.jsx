import React, { Component } from 'react'
import './HeaderBar.css'

class HeaderBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Emaily App</a>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/surveys">Surveys </a>
            </li>
          </ul>

          <div className="" id="navbarSupportedContent">
            <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Sign In with Google</button>
          </div>
        </div>
      </nav>
    )
  }
  
}

export default HeaderBar
