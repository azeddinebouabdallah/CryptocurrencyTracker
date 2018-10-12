/**
 * Cryptocurrency model file
 */
// Require modules
const mongoose = require('mongoose')

// Cryptocurrency Schema
const CryptocurrencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    }, 
    logoLink: {
        type: String,
        required: true
    }, 
    keyword: {
        type: String,
        required: true,
        unique: true
    }, 
    LatestPricesOfWeek: [String],
    dateOfCreation: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Export Cryptocurrency model
module.exports = mongoose.model('Cryptocurrency', CryptocurrencySchema)