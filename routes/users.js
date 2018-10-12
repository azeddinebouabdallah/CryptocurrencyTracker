/**
 * users.js File
 * this file contain the users routes of the Cryptocurrency restful api
 */
// Require dependencies
const express = require('express')

// Create the router obj
const router = express.Router()

// Get /users returns an array of all the users(admins) (AUTHENTICATION NEEDED)
router.get('/', (req, res) => {
  // Return array of users
})

// Get /users/:id returns informations about a specific user 'BY id'(AUTHENTICATION NEEDED)
// !!! DON'T RETURN PASSWORD !!!
router.get('/:id', (req, res) => {
  // Get a user
})

// Post /user allows admins to create a new user
router.post('/', (req, res) => {
  // Create a new user
})

// Patch /user/:id allows the specific admin to change his information (BY id)(AUTHENTICATION NEEDED)
router.patch('/:id', (req, res) => {
  // Modify a user
})

// Delete /user/:id allows admins to delete a specific user (BY id)(AUTHENTICATION NEEDED)
router.delete('/:id', (req, res) => {
  // Delete a user
})

// Export the users routes
module.exports = router
