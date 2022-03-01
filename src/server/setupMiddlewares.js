'use strict'

const compression = require('compression')
const express = require('express')
const cors = require('cors')
const { logger } = require('../libs')

const { logRequest } = logger

/**
 * Setup main express middlewares
 * @param {Object} app Express application object
 */
const setupMiddlewares = (app) => {
  // compress all responses
  app.use(compression())

  // log to console
  app.use(logRequest)

  // trust proxy
  app.enable('trust proxy')

  // Body Parser
  app.use(express.json({
    limit: '2mb'
  }))

  app.use(express.urlencoded({
    limit: '2mb',
    extended: false
  }))

  // Origin control
  app.use(cors())
}

module.exports = setupMiddlewares
