'use strict'

const chalk = require('chalk')
const morgan = require('morgan')

const consoleError = require('./consoleError')

const customFormat = (tokens, req, res) => {
  const lines = []

  lines.push(`${tokens['remote-addr'](req, res)} - [${tokens.date(req, res, 'clf')}] ${chalk.blue(`"${tokens.method(req, res)} ${tokens.url(req, res)}"`)} ${tokens.status(req, res)}`)

  const referrer = tokens.referrer(req, res)
  referrer && lines.push(`  ${referrer || ''}`)

  lines.push(`  "${tokens['user-agent'](req, res)}"`)

  return lines.join('\n')
}

const logRequest = morgan(customFormat)

/**
 * Log error from express error handler
 */
const handleExpressError = (err) => {
  if (err.status) {
    err.stack = undefined
  }

  consoleError(err, '[Express Error]')

  return err
}

/**
 * Log error and for exit
 */
const handleFatalError = (err) => {
  consoleError(err, '[Fatal Error]')
  process.exit(1)
}

module.exports = {
  handleFatalError,
  handleExpressError,
  logRequest
}
