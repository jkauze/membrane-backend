/* eslint-disable no-unused-vars */
'use strict'

var ip = require('ip');

const { expressTools } = require('../../libs')
const config = require('../../config/server')

const { sendJSONResponse } = expressTools

const formatResponse = (dependencies) => ({
  msg: 'Health status from membrane backend',
  config,
  network: ip.address(),
  dependencies
})

/**
 * @param {Object} dependencies - express application
 */
const setupHealthRoute = (dependencies) => (req, res, next) => {
  try {
    const response = formatResponse(dependencies)
    sendJSONResponse(res, 200, response)
  } catch (error) {
    next(error)
  }
}

module.exports = setupHealthRoute
