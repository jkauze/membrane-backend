'use strict'

const handleError = require('./consoleError')
const { handleExpressError, handleFatalError, logRequest } = require('./logger')

module.exports = {
  handleError,
  handleExpressError,
  handleFatalError,
  logRequest
}
