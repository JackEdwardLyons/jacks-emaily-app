/**
 * All routes relating to the auth flow
 * 
 */
const passport = require('passport')

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      // tells google what access we 
      // want from their profile
      scope: ['profile', 'email']
    })
  )

  app.get(
    '/auth/google/callback', 
    passport.authenticate('google'), 
    (req, res) => res.redirect('/surveys')
  )
  
  app.get('/api/logout', (req, res) => {
    // Logout fn attached to the 
    // req object via passport
    req.logout()
    res.redirect('/')
  })

  // Check to see if a user is logged  in
  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}
