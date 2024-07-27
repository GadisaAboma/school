const express = require('express')
const {
    myStudents,
    getStudent,
    setStudentMark, 
    getAttendance,
    setStudentRank,
    setAttendanceDate,
    setStudentAttendance,
    viewAttendance,
    generateAttendanceReport} = require('../controllers/teacherControllers')
const { teacherAuth } = require('../middleware/teacherAuth')
const router = express.Router()

router.post('/myStudents', teacherAuth, myStudents)
router.get('/getStudent/:id', teacherAuth, getStudent)
router.post('/setStudentMark/:id', teacherAuth, setStudentMark)
router.post('/getAttendance', teacherAuth, getAttendance)
router.post('/setRank', teacherAuth, setStudentRank)
router.post('/setAttendanceDate', teacherAuth, setAttendanceDate)
router.post('/setStudentAttendance', teacherAuth,  setStudentAttendance)
router.post('/viewAttendance', teacherAuth,  viewAttendance)
router.post('/generateAttendanceReport', teacherAuth, generateAttendanceReport)


module.exports = router