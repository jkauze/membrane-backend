'use strict'

const sendJSONResponse = (res, status, data) => res.status(status).json(data)

const sendEmptyResponse = res => res.status(204).json({})

module.exports = {
  sendJSONResponse,
  sendEmptyResponse
}
