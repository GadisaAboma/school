const express = require('express')
const { createAdmin,
    createStudent,
    createTeacher,
    getAllTeachers,
    getTeacher,
    assignTeacher,
    changeSemister, 
    getTranscript,
    approveRequest, 
    deleteTeacher,
    getStudent,
    updateStudent,
    getAdminProfile,
    updateAdmin,
    resetAssignedTeachers,
    assignHomeroomTeacher,
    getTeacherDetail,
    removeTeacherAssign,
    resetAdmin,
    addEvent,
    getEvents,
    deleteEvent,
    editEvent,
    updateTeacher,
    givePermission} = require('../controllers/adminControllers')

const { auth } = require('../middleware/auth')


const router = express.Router()


router.post('/createAdmin', createAdmin)
router.post('/createStudent', createStudent)
router.post('/createTeacher', auth, createTeacher)
router.get('/getTeachers', auth, getAllTeachers)
router.put('/changeSemister', auth, changeSemister)
router.get('/getTeacher/:id', auth, getTeacher)
router.put('/assignTeacher/:id', auth, assignTeacher)
router.post('/getTranscript', auth, getTranscript)
router.post('/approveRequest', approveRequest)
router.post('/deleteTeacher', auth, deleteTeacher)
router.put('/getStudent', auth, getStudent)
router.post('/updateStudent/:id', auth, updateStudent)
router.get('/getAdminProfile', auth, getAdminProfile)
router.put('/updateAdmin', auth, updateAdmin)
router.get('/resetAssignedTeachers', auth, resetAssignedTeachers)
router.post('/assignHomeroomTeacher', auth, assignHomeroomTeacher)
router.get('/getTeacherDetail/:id', auth, getTeacherDetail)
router.post('/resetAdmin', resetAdmin)
router.post('/removeTeacherAssign', auth, removeTeacherAssign)
router.post('/addEvent', auth, addEvent)
router.get('/getEvents', getEvents)
router.get('/deleteEvent/:id', auth, deleteEvent)
router.post('/editEvent', auth, editEvent)
router.post('/updateTeacher', auth, updateTeacher)
router.post('/givePermission', auth, givePermission)

module.exports = router