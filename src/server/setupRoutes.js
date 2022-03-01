'use strict'

const express = require('express')

const setupHealth = require('../handlers/health')

/**
 * @param {Object} dependencies
 * @returns {Object} express Router
 */
const setupApi = (dependencies = {}) => {
  const api = express.Router()

  api.get('/', setupHealth(dependencies))

  // optional
  api.get('/health', setupHealth(dependencies))



  return api
}

module.exports = setupApi
