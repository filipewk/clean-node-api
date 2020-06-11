const app = require('express')()
const setupApp = require('./setup')
const setupRoutes = require('./routes')

setupApp(app)
setupRoutes(app)

module.exports = app
