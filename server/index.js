const express = require('express')
const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')

const app = express()

/*
 ** Google Passport Authentication 
 ** ------------------------------- */
app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token: ', accessToken)
    console.log('refresh token: ', refreshToken)
    console.log('profile: ', profile)
  })
)

app.get(
  '/auth/google',
  passport.authenticate(
    'google', {
      // tells google what access we want from their profile
      scope: ['profile', 'email']
    }
  )
)

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000
app.listen(PORT)
