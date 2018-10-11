const fs = require('fs')

let env = process.env.NODE_ENV
let data = JSON.parse(fs.readFileSync('config.json', 'utf8'))

if (env === "Development"){
    process.env.PORT = data.development.PORT
}else {
    process.env.PORT = 5000
}