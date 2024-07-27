const jwt = require('jsonwebtoken')

const generateAuthToken = (id) => {
  
    return  jwt.sign({ id }, process.env.JWT_SECRET)
}

module.exports = { generateAuthToken }