/**
 * Everything required from passport.js
 * in order to set up authentication
 */
const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')
// Fetch all users out of mongoose
const User = mongoose.model('users')

// SerializeUser fn (set to cookies)
// 1st arg is the newly generated User
// 2nd arg is the done() cb
passport.serializeUser((user, done) => {
  // the user.id is the unique id 
  // generated in mongo when a new
  // User record is created 
  done(null, user.id)
})

// Turns the userId back into a user
passport.deserializeUser((userId, done) => {
  User.findById(userId).then(user => {
    done(null, user)
  })
})

/*
 ** Google Passport Authentication 
 ** ------------------------------- */
passport.use(
  new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // Find the first User record with a googleId  
    // that matches the profile id
    User.findOne({ googleId: profile.id })
      .then((existingUser) => { 
        // done fn
        // 1st arg is the error Object
        // 2nd arg is the existingUser
        done(null, existingUser)
        if (existingUser) return
        
        // If no User exists, create and save a 
        // new User model instance
        new User({ googleId: profile.id })
          .save()
          .then(newUser => done(null, newUser))
      }
    )
  })
)
