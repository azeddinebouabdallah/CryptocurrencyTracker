/**
 * mainRoute.js File
 * this file contain the main routes of the Cryptocurrency restful api
 */
// Require dependencies
const express = require('express')

// Create the router obj
const router = express.Router()

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
  // Get a CC
})

// Post / allows admins to create a new cryptocurrency (AUTHENTICATION NEEDED)
router.post('/', (req, res) => {
  // Create a new cryptocurrency
})

// Patch /:cryptocurrency allows admins to modify a specific CC (BY keyword) (AUTHENTICATION NEEDED)
router.patch('/:cryptocurrency', (req, res) => {
  // Modify a CC
})

// Delete /:cryptocurrency allows admins to delete a specific CC (BY keyword) (AUTHENTICATION NEEDED)
router.delete('/:cryptocurrency', (req, res) => { 
  // Delete a CC
})

// Export the mainRoute
module.exports = router
