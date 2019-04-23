const passport = require('passport')


module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      // tells google what access we want from their profile
      scope: ['profile', 'email']
    })
  )

  app.get('/auth/google/callback', passport.authenticate('google'))
}
