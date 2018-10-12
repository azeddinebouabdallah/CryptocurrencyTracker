/**
 * SERVER.JS file # The core express server
 */

/**
 * ##########################################
 * ##### Requiring and Declaration part #####
 * ##########################################
 */

// Require the envOrenment setup (Environement variables setup to be specific)
require('./setEnv')

// Require modules
const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const emoji = require('node-emoji')

const mainRoute = require('./routes/mainRoute')

// Create the express server
const app = express()
// Some additional variables
const PORT = process.env.PORT

/**
 * ##########################################
 * ##### Body part #####
 * ##########################################
 */

// Add the middleware bodyParser.json() function to parse the JSON data resived from requests bodies
app.use(bodyParser.json())

// Routes of the API
app.use('/', mainRoute)

app.listen(PORT, error => {
  if (error) {
    return console.log('Oops!, something went wrong!. Better luck next time :D')
  }
  console.log(`
    WELCOME TO ${chalk.green('CRYPTOCURRENCY RestFul-API')} ${emoji.get(
    'raised_back_of_hand'
  )}\n
    Listening on port ==> ${chalk.red(PORT)}\n 
    Visit ${chalk.bgWhite(
      chalk.black(`http://localhost:${PORT}`)
    )} to see your app \n
    Authors: ${chalk.inverse('Azeddine Bouabdallah')} and ${chalk.inverse(
    'Imed Eddine Benoudjit'
  )}\n
    ${chalk.bold(`ctrl + c to exit`)}
    `)
})
