/**
 * User model file
 */
// Require modules
const mongoose = require('mongoose')

// User schema
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateLatestLogin: Date,
    dateOfCreation: {
        type: Date,
        default: Date.now
    },
    tokens: [String]
})

// Export user model
module.exports = mongoose.model('User', UserSchema)