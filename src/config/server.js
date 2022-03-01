'use strict'

const chalk = require('chalk')

const {  MEMBRANE_SERVER_PORT } = process.env

const config = {
  port: MEMBRANE_SERVER_PORT || 8080
}

console.info(chalk.cyan('Server:'), JSON.stringify(config, null, ' '))

module.exports = config
