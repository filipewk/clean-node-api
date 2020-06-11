const app = require('express')()
const setupApp = require('./setup')
setupApp(app)

module.exports = app
