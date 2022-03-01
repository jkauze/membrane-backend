'use strict'

const { handleExpressError } = require('../libs/logger')

const getStatus = ({ status }) => status || 500

const sendError = (error, res) => {
  const status = getStatus(error)
  const message = handleExpressError(error)

  res.status(status).send(message)
}

const errorHandler = (err, req, res, next) => sendError(err, res)


/**
 * setup Express error handler
 * @param {Object} app Express application objec
 */
const setupErrorHandler = (app) => app.use(errorHandler)


module.exports = setupErrorHandler
