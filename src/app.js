'use strict'

const express = require('express');

const { logger } = require('./libs')

const setupRoutes = require('./server/setupRoutes')
const setupDependencies = require('./server/setupDependencies')
const setupErrorHandler = require('./server/setupErrorHandler')
const setupMiddlewares = require('./server/setupMiddlewares')
const startServer = require('./server/startServer')

const { handleFatalError } = logger

/**
 * @param {Object} dependencies - aplication dependencies
 * @returns {Object} express applications
 */
const setupApp = (dependencies) => {
  const app = express()

  setupMiddlewares(app)

  app.use(setupRoutes(dependencies))

  setupErrorHandler(app)

  return app
}

// Run the server when this module is not required
if (!module.parent) {
  setupDependencies()
    .then(setupApp)
    .then(startServer)
    .catch(handleFatalError)
}

// Export for testing
module.exports = setupApp
