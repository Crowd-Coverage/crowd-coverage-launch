const routes = require('next-routes')();

routes
  .add('/signup/new', '/signup/new')
  .add('/faq', '/faq')
  .add('/home', '/home')

module.exports = routes;