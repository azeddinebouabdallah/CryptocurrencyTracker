/**
 * subscription.js File
 * this file contain the subscription routes of the Cryptocurrency restful api
 */
// Require dependencies
const express = require('express')

// Create the router obj
const router = express.Router()

// Get /subscription returns an array of all the subscriptions (AUTHENTICATION NEEDED)
router.get('/', (req, res) => {
  // Return array of subs
})

// Get /subscription/:id returns informations about a specific sub 'BY id' (AUTHENTICATION NEEDED)
router.get('/:id', (req, res) => {
  // Get a Sub
})

// Post /subscription allows users to create a new subscription
router.post('/', (req, res) => {
  // Create a new cryptocurrency
})

// Delete /subscription/:id allows admins to delete a specific Sub (BY id)(AUTHENTICATION NEEDED)
router.delete('/:id', (req, res) => {
  // Delete a CC
})

// Export the subsriptions routes
module.exports = router
