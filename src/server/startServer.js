'use strict'

const chalk = require('chalk')

const { port } = require('../config/server')
const { name, version } = require('../../package.json')

const serverMessage = chalk.green(`
${name} ${version}
Server running in http://localhost:${port}/
Running with NodeJS ${process.version}`)

/**
 * @param {Object} app - express application
 */
const startServer = async (app) => {

  app.listen(port, () => {
    console.info(serverMessage)
  })
}

module.exports = startServer
