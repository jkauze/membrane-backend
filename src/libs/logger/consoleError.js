'use strict'

const chalk = require('chalk')

/**
 * Log an error in the console
* @param {Object}  err   - An Express error
* @param {string}  title - The error title.
*/
const handleError = (err, title = '[Error]') => {
  console.error(`${chalk.red(title)} ${err.message}`)
  if (err.response) {
    const { data } = err.response

    console.error(data)
    return err
  }

  console.error(err)
  return err
}

module.exports = handleError
