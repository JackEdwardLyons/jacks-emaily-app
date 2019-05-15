const proxy = require('http-proxy-middleware')

/**
 * React.js --- http-proxy-middleware --- Express.js
 * ------------------------------------------------------------ *
 * We are using http-proxy-middleware with React and Express.js
 * so that there are no issues with CORS between the /api server
 * and the front end. This workaround is purely built in to allow
 * cookies to be send across domains + no CORS headaches.
 * 
 */
module.exports = function (app) {
  app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }))
}
