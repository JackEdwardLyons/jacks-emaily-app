const express = require('express')
const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const app = express()

passport.use(new googleStrategy())
// Client ID : 1013521192175-7lep177rujqs4l2jfqd3n2j8j4qlirut.apps.googleusercontent.com 
// Client Secret :  -WaNerYmpkQxnkl0qOgKsYeg 

const PORT = process.env.PORT || 5000
app.listen(PORT)
