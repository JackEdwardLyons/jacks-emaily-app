const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

require('./models/User')
require('./services/passport')

const app = express()

//  Include Auth Cookies
app.use(
  cookieSession({
    maxAge: (30 * 24 * 60 * 60 * 1000), // 30 days before cookie expires
    keys: [keys.cookieKey] 
  })
)

// Initialize Poassport
app.use(passport.initialize())
app.use(passport.session()) 

//  Connect the DB
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

// Include all Auth routes into the app
require('./routes/authRoutes')(app)

// Fire up the app on localhost:5000
const PORT = process.env.PORT || 5000
app.listen(PORT)
