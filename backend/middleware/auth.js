const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')

const auth = async (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.replace('Bearer ', '')

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.admin = await Admin.findById(decoded.id)

        if (req.admin) {
            next()
        } else {
            res.send("Please Authenticate!")
        }

    } else {
        res.send("Please Authenticate!")
    }
}

module.exports = {
    auth
}