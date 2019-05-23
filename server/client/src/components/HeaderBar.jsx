import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { Link } from 'react-router-dom'
import Payments from './Payments'
import '../styles/HeaderBar.css'

class HeaderBar extends Component {

  renderContent () {
    switch(this.props.auth) {
      case null:
        return ''
      case false:
        return <a href="/auth/google" className="btn btn-outline-danger my-2 my-sm-0">Sign In with Google</a>
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2"><a href="/api/logout" className="btn btn-outline-danger">Log Out</a></li>
        ]
    }
  }

  render() {
    const isLoggedIn = this.props.auth

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link 
            className="navbar-brand" 
            to={ isLoggedIn ? '/surveys' : '/' }
          >
            Emaily App
          </Link>

          <ul className="navbar-nav mr-auto">
            { isLoggedIn && 
              <li className="nav-item">
                <Link 
                  className="nav-link"
                  to={ isLoggedIn ? '/surveys' : '/' }
                >
                  Surveys 
                </Link>
              </li>
            }
          </ul>

          <ul className="navbar-right">
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    )
  } 
}

// ref: https://react-redux.js.org/using-react-redux/connect-mapstate
function mapStateToProps ({ auth }) {
  return { auth }
}

// As the first argument passed in to connect, mapStateToProps is used
// for selecting the part of the data from the store that the connected 
// component needs. Usually referred to as just mapState for short.
export default connect(mapStateToProps)(HeaderBar)
