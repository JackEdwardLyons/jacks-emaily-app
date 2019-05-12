/**
 * Production environment credentials 
 * Vars stored on live server
 * Site live at: http://enigmatic-lowlands-60669.herokuapp.com
 * 
 */
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
}
