const Admin = require('../models/admin')
const Student = require('../models/student')
const Teacher = require('../models/teacher')
const Semister = require('../models/semister')
const asyncHandler = require('express-async-handler')

const { generateAuthToken } = require('../utils/generateToken')


const loginUser = async (req, res) => {
    try {

        let admin, student, teacher
        const { username, password } = req.body
        admin = await Admin.findOne({ username })
        student = await Student.findOne({ username })
        teacher = await Teacher.findOne({ username })

        if (admin && (await admin.matchPassword(password))) {
            res.json({
                _id: admin._id,
                name: admin.name,
                username: admin.username,
                token: generateAuthToken(admin._id),
                role: 'admin'
            })
        }

        else if(student && (await student.matchPassword(password))) {
            res.json({
                _id: student._id,
                name: student.name,
                username: student.username,
                token: generateAuthToken(student._id),
                role: 'student',
                grade: student.currentGrade
            })
        }
        else if(teacher && (await teacher.matchPassword(password))) {

            res.json({
                _id: teacher._id,
                name: teacher.name,
                username: teacher.username,
                assigned: teacher.assigned,
                token: generateAuthToken(teacher._id),
                homeRoomGrade: teacher.homeRoomGrade,
                homeRoomYear: teacher.homeRoomYear,
                role: 'teacher',
                permissionToRegister: teacher.permissionToRegister
            })
        }
        else {
            res.status(400).send("Unable to login")
        }

    } catch (error) {
        res.status(400).send("Unable to login")

    }
}
const getCurrentSemister = asyncHandler(async (req, res) => {

    const sem = await Semister.findOne({})
    res.send(sem.semister)

})

const passStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)
    student.currentGrade = 8
    const ss = await student.save()
    res.send(ss)

})

module.exports = {
    loginUser,
    passStudent,
    getCurrentSemister
}