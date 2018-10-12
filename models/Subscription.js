/**
 * Subscription model file
 */
// Require modules
const mongoose = require('mongoose')

// Subscription schema
const SubscriptionSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        unique: true
    },
    dateOfCreation: {
        type: Date,
        default: Date.now
    }
})

// Export subscription model
module.exports = mongoose.model('Subscription', SubscriptionSchema)