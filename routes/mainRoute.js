/**
 * mainRoute.js File
 * this file contain the main routes of the Cryptocurrency restful api
 */
// Require dependencies
const express = require('express')
const _ = require('lodash')

// Create the router obj
const router = express.Router()

// Import models
const Cryptocurrency = require('../models/Cryptocurrency')
const Subscription = require('../models/Subscription')
const User = require('../models/User')

// Get / returns a simple information response about the API
router.get('/', (req, res) => {
  let jsonResponse = {
    APIName: 'Cryptocurrency restful api',
    Version: '1.0.0-beta',
    State: 'Development',
    Authors: [
      { Name: 'Azeddine Bouabdallah' },
      { Name: 'Imed Eddine Benoudjit' }
    ],
    Date: '11-10-2018'
  }
  res.json(jsonResponse)
})

// Get /:cryptocurrency returns informations about a specific cryptocurrency 'BY keyword'
router.get('/:cryptocurrency', (req, res) => {
  let tag = req.params.cryptocurrency
  Cryptocurrency.findOne({ keyword: tag })
    .then(data => {
      if (!data) {
        let error = {
          error: "Oops!, there's no cryptocurrency with this tag"
        }
        return sendResponseBack(error, 500, res)
      }
      return sendResponseBack(data, 200, res)
    })
    .catch(err => {
      if (err) {
        let error = {
          error: err
        }
        return sendResponseBack(error, 500, res)
      }
    })
})

// Post / allows admins to create a new cryptocurrency (AUTHENTICATION NEEDED)
router.post('/', (req, res) => {
  // Create a new cryptocurrency
  let body = _.pick(req.body, [
    'name',
    'description',
    'logoLink',
    'keyword',
    'dateOfCreation'
  ])
  if (_.isEmpty(body)) {
    let error = {
      error: 'Oops!, your request body is empty'
    }
    return sendResponseBack(error, 500, res)
  }
  let newCryptocurrency = new Cryptocurrency(body)
  newCryptocurrency
    .save()
    .then(data => {
      if (!data) {
        let error = {
          error: "Oops!, something went wrong"
        }
        return sendResponseBack(error, 500, res)
      }
      let message= {
        message: 'Cryptocurrency inserted successfully'
      }
      return sendResponseBack(message, 200, res)
    })
    .catch(err => {
      if (err) {
        console.log(err)
        return sendResponseBack(err, 500, res)
      }
    })
})

// Patch /:cryptocurrency allows admins to modify a specific CC (BY keyword) (AUTHENTICATION NEEDED)
router.patch('/:cryptocurrency', (req, res) => {
  // Modify a CC
})

// Delete /:cryptocurrency allows admins to delete a specific CC (BY keyword) (AUTHENTICATION NEEDED)
router.delete('/:cryptocurrency', (req, res) => {
  // Delete a CC
})

function sendResponseBack(message, statusCode, res) {
  return res.status(statusCode).json(message)
}

// Export the mainRoute
module.exports = router
