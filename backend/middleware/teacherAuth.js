const Teacher = require('../models/teacher')
const jwt = require('jsonwebtoken')

const teacherAuth = async (req, res, next) => {


    if (req.headers.authorization) {
        const token = req.headers.authorization.replace('Bearer ', '')
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.teacher = await Teacher.findById(decoded.id)


        if (req.teacher) {
            next()
        } else {
            res.send('Please Authenticate')
        }

    } else {
        res.send('Please Authenticate')
    }

}

module.exports = {
    teacherAuth
}