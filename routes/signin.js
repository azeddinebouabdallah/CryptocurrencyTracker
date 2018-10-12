/**
 * sigin.js File
 * this file contain the user login of the Cryptocurrency restful api
 */
// Require dependencies
const express = require('express')

// Create the router obj
const router = express.Router()

// Post /sigin allows an admin to sigin It returns a TOKEN and ID of that user
router.post('/', (req, res) => {
  // login a user
})

// Export the sigin routes
module.exports = router
