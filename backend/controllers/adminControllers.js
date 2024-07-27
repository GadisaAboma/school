const Admin = require('../models/admin')
const Student = require('../models/student')
const Teacher = require('../models/teacher')
const Semister = require('../models/semister')
const Grades = require('../models/grades')
const Request = require('../models/requests')
const Events = require('../models/Events')

const asyncHandler = require('express-async-handler')

const { generateAuthToken } = require('../utils/generateToken')



const changeSemister = asyncHandler(async (req, res) => {

    const { semister } = req.body

    const sem = await Semister.findOne({})

    sem.semister = semister

    changed = await sem.save()

    res.send("Change Success")

})

const createAdmin = asyncHandler(async (req, res) => {

    const { username } = req.body

    const userExists = await Admin.findOne({ username })

    if (userExists) {
        res.status(400)
        res.send("User already exists")
    }

    const newAdmin = new Admin(req.body)

    const admin = await newAdmin.save();

    if (admin) {
        res.status(201).send(admin)
    } else {
        res.status(404)
        throw new Error("Invalid data")
    }

})


const createStudent = asyncHandler(async (req, res) => {


    const { name, username, password, age, gender, year, grade } = req.body

    const userExists = await Student.findOne({ username })

    if (userExists) {
        res.status(400)
        throw new Error("Student already exists")
    }


    const newStudent = new Student({
        name,
        username,
        password,
        age,
        gender,
        currentYear: parseInt(year),
        currentGrade: parseInt(grade)
    })

    newStudent.grades[parseInt(grade)].year = parseInt(year)

    const student = await newStudent.save();

    if (student) {
        res.status(201).send(student)
    } else {
        res.status(404)
        throw new Error("Invalid data")
    }

})


const createTeacher = asyncHandler(async (req, res) => {


    const { name, username, password, major } = req.body

    const userExists = await Teacher.findOne({ username })

    if (userExists) {
        res.status(400)
        throw new Error("Teacher already exists")
    }


    const newTeacher = new Teacher({
        name,
        username,
        password,
        major,
        homeRoomGrade: '',
        homeRoomYear: 0
    })

    const teacher = await newTeacher.save();

    if (teacher) {
        res.status(201).send(teacher)
    } else {
        res.status(404)
        throw new Error("Invalid data")
    }
})

const getAllTeachers = asyncHandler(async (req, res) => {

    const allTeachers = await Teacher.find({})

    res.status(200).send(allTeachers)

})

const getTeacher = asyncHandler(async (req, res) => {

    const teacher = await Teacher.findById(req.params.id)

    res.send(teacher)
})

const assignTeacher = asyncHandler(async (req, res) => {

    const { assignedYear, assignedSubject, assignedGrade, name } = req.body

    const teacher = await Teacher.findById(req.params.id)
    const teachers = await Teacher.find({})



    if (!teacher) {
        throw new Error('No teacher found with this id')
    }

    teachers.map((tt) => {
        tt.assigned.map((t) => {
            if (t.assignedGrade === assignedGrade && t.assignedSubject === assignedSubject && t.assignedYear === parseInt(assignedYear)) {
                throw new Error('Already Assigned to ' + tt.name)
            }
        })
    })
    if (teacher.assigned.length > 5) {
        throw new Error('Max Assign Reached For This Teacher!')
    }




    const grade = await Grades.findOne({})


    grade[assignedGrade][assignedSubject] = name


    await grade.save()

    const newAssign = {
        assignedGrade,
        assignedSubject,
        assignedYear: parseInt(assignedYear)
    }

    let alreadyAssiged = false

    teacher.assigned.map((e) => {
        if ((e.assignedGrade === assignedGrade && e.assignedSubject === assignedSubject && e.assignedYear === parseInt(assignedYear))) {
            alreadyAssiged = true
        }
    })

    if (alreadyAssiged) {
        throw new Error("Already assigned to this teacher")
    }

    else {
        teacher.assigned = teacher.assigned.concat(newAssign)
        teacher.homeRoomGrade = req.body.homeRoomGrade || teacher.homeRoomGrade


        if (req.body.homeRoomGrade !== '') {
            teacher.homeRoomYear = parseInt(assignedYear)
        }

        const assignedTeacher = await teacher.save()
        if (assignedTeacher) {
            res.send("Success")
        }
    }
})

const getTranscript = asyncHandler(async (req, res) => {
    const { username } = req.body

    const student = await Student.findOne({ username })
    if (student) {
        res.send(student)
    } else {
        res.status(404)
        throw new Error("Unable to find student with this username")
    }
})

const approveRequest = asyncHandler(async (req, res) => {

    const { username } = req.body

    const student = await Student.find({ username })

    student[0].currentGrade += 1
    student[0].grades[(student[0].currentGrade)].year = student[0].currentYear + 1
    student[0].currentYear = (parseInt(student[0].currentYear) + 1)
    student[0].age = (parseInt(student[0].age) + 1).toString()

    const saved = await student[0].save()

    if (saved) {
        const request = await Request.find({ username })
        await request[0].remove()
        res.send("success")
    } else {
        throw new Error('failed to approve')
    }

})

const getStudent = asyncHandler(async (req, res) => {

    const { username } = req.body

    const student = await Student.findOne({ username })
    if (student) {
        res.send(student)
    } else {
        throw new Error('No student found!')
    }
})

const deleteTeacher = asyncHandler(async (req, res) => {

    const { id } = req.body
    const teacher = await Teacher.findById(id)

    if (await teacher.deleteOne()) {
        res.send("success")
    }

})

const updateStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if (student) {
        student.name = req.body.name || student.name
        student.username = req.body.username || student.username
        student.password = req.body.password || student.password

        const updatedStudent = await student.save()

        if (updatedStudent) {
            res.send("Update Success!")
        } else {
            throw new Error("Update Fail!")
        }

    } else {
        throw new Error("erorr!")
    }
})


const updateAdmin = asyncHandler(async (req, res) => {


    const admin = await Admin.findOne({})

    if (admin) {
        admin.name = req.body.name || admin.name
        admin.username = req.body.username || admin.username
        admin.password = req.body.password || admin.password

        const updatedAdmin = await admin.save()

        if (updatedAdmin) {
            res.send("Update Success!")
        } else {
            throw new Error("Update Fail!")
        }

    } else {
        throw new Error("erorr!")
    }
})


const getAdminProfile = asyncHandler(async (req, res) => {
    const admin = await Admin.findOne({})
    res.send(admin)
})

const resetAssignedTeachers = asyncHandler(async (req, res) => {
    const teachers = await Teacher.find({})
    teachers.map(async teacher => {
        teacher.assigned = []
        await teacher.save()
    })

    res.send('Reset Success')
})

const assignHomeroomTeacher = asyncHandler(async (req, res) => {
    const { id, grade, year } = req.body

    const teachers = await Teacher.find({})


    teachers.map(t => {
        if (t.homeRoomGrade === grade && t.homeRoomYear === parseInt(year)) {
            throw new Error('Already assigned to ' + t.name)
        }
    })

    const teacher = await Teacher.findById(id)

    teacher.homeRoomGrade = grade
    teacher.homeRoomYear = parseInt(year)

    const assigned = await teacher.save()

    if (assigned) {
        res.send('Success!')
    } else {
        res.send('Error!')
    }
})

const getTeacherDetail = asyncHandler(async (req, res) => {
    const teacher = await Teacher.findById(req.params.id)
    res.send(teacher)
})

const resetAdmin = asyncHandler(async (req, res) => {
    const admin = await Admin.findOne({})

    admin.name = "Admin User"
    admin.username = "admin"
    admin.password = 'admin'

    const aa = await admin.save()
    res.send(aa)
})

const removeTeacherAssign = asyncHandler(async (req, res) => {
    const { teacherId, assignId } = req.body
    const teacher = await Teacher.findById(teacherId)

    teacher.assigned = teacher.assigned.filter(assign => assign._id != assignId)

    const tt = await teacher.save()

    if (tt) {
        res.send('success')
    }

})


const addEvent = asyncHandler(async (req, res) => {
    const { description } = req.body

    const newEvent = new Events({
        description
    })

    const e = await newEvent.save()

    if (e) {
        res.send('Success')
    } else {
        throw new Error('Fail')
    }

})

const getEvents = asyncHandler(async (req, res) => {

    const events = await Events.find().sort({ date: -1 })

    res.send(events)

})

const deleteEvent = asyncHandler(async (req, res) => {

    const event = await Events.findById(req.params.id)

    if (await event.remove()) {
        res.send('success')

    }
})

const editEvent = asyncHandler(async (req, res) => {

    const { id, description } = req.body

    const event = await Events.findById(id)

    if (event.description != description) {
        event.description = description
        event.edited = true
    }

    if (await event.save()) {
        res.send('success')
    }

})

const givePermission = asyncHandler(async (req, res) => {
    const { id } = req.body
    const teacher = await Teacher.findById(id)
    teacher.permissionToRegister = !teacher.permissionToRegister

    await teacher.save()
    res.send('success')
})

const updateTeacher = asyncHandler(async (req, res) => {

    const { id } = req.body

    const teacher = await Teacher.findById(id)

    if (teacher) {
        teacher.name = req.body.name || teacher.name
        teacher.username = req.body.username || teacher.username
        teacher.password = req.body.password || teacher.password

        const updateTeacher = await teacher.save()

        if (updateTeacher) {
            res.send("Update Success!")
        } else {
            throw new Error("Update Fail!")
        }

    } else {
        throw new Error("erorr!")
    }
})

module.exports = {
    createAdmin,
    createStudent,
    givePermission,
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
    resetAdmin,
    removeTeacherAssign,
    addEvent,
    getEvents,
    deleteEvent,
    editEvent,
    updateTeacher,
}