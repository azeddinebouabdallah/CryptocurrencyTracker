const fs = require('fs')
const mongoose = require('mongoose')

let env = process.env.NODE_ENV
let data = JSON.parse(fs.readFileSync('config.json', 'utf8'))
mongoose.Promise = global.Promise
if (env === 'development') {
  process.env.PORT = data.development.PORT
  process.env.MONGODB_URI = data.development.MONGODB_URI
}

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)

module.exports = mongoose
