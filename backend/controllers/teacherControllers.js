const Teacher = require('../models/teacher')
const asyncHandler = require('express-async-handler')
const Student = require('../models/student')
const createTeacher = async (req, res) => {

    try {
        const newTeacher = new Teacher(req.body)
        const teacher = await newTeacher.save();

        if (teacher) {
            res.status(201).send(teacher)
        }

    } catch (error) {
        res.status(400).send(error)
    }
}

const myStudents = asyncHandler(async (req, res) => {

    const { currentYear, currentGrade } = req.body

    const students = await Student.find({
        currentGrade,
        currentYear: parseInt(currentYear)
    })

    if (students.length > 0) {
        res.send(students)
    }

    else {
        res.send("No Student Found")
    }
})

const getStudent = asyncHandler(async (req, res) => {
    const id = req.params.id
    const student = await Student.findById(id)

    if (student) {
        res.send(student)
    } else {
        throw new Error("No Student with this id")
    }
})

const setStudentMark = asyncHandler(async (req, res) => {

    const { currentGrade, currentSemister, subject, mark } = req.body
    const student = await Student.findById(req.params.id)
    student.grades[currentGrade][currentSemister][subject] = parseInt(mark)

    let subjects = Object.keys(student.grades[currentGrade][currentSemister])

    let totalMark = 0
    const add = "total"
    const ave = 'average'
    subjects.shift()
    subjects.pop()
    subjects.pop()
    subjects.pop()

    subjects.map(sub => {
        totalMark = totalMark + student.grades[currentGrade][currentSemister][sub]

    })

    student.grades[currentGrade][currentSemister][add] = totalMark
    student.grades[currentGrade][currentSemister][ave] = (totalMark / subjects.length).toFixed(2)


    student.grades[currentGrade].ava = (student.grades[currentGrade].sem1.average + student.grades[currentGrade].sem2.average) / 2

    const newStudent = await student.save()

    const students = await Student.find({
        currentYear: student.currentYear,
        currentGrade: student.currentGrade

    })

    console.log(students)

    if (newStudent) {
        res.send("success")
    } else {
        res.send("error")
    }
})

const getAttendance = asyncHandler(async (req, res) => {
    const { year, grade } = req.body

    const students = await Student.find({
        currentYear: year,
        currentGrade: parseInt(grade)
    })

    if (students.length > 0) {
        res.send(students)
    } else {
        throw new Error("No student found!")
    }
})

const setStudentRank = asyncHandler(async (req, res) => {

    const { id, sem, rank, grade } = req.body

    const student = await Student.findById(id)

    if(sem === 'ave') {
        student.grades[grade].rank = rank
    } else {
        student.grades[grade][sem].rank = rank
    }
  
    const saved = await student.save()

    if (saved) {
        res.send("Success!")
    } else {
        throw new Error("Error!")
    }
})

const setAttendanceDate = asyncHandler(async (req, res) => {

    const { year, grade, date } = req.body

    const newAttendance = {
        date,
        present: false
    }

    const students = await Student.find({
        currentGrade: parseInt(grade),
        currentYear: year
    })

    if(students.length < 1) {
        throw new Error('No Student Found!')
    }

    let found = false

    students[0].grades[grade].attendance.map(attendance => {
        if (attendance.date === date) {
            found = true
        }
    })

    if (found) {
        throw new Error("Attendance already taken, please change menu to view")
    }

    students.map(async (student) => {
        student.grades[grade].attendance = student.grades[grade].attendance.concat(newAttendance)
        await student.save()
    })


    const students2 = await Student.find({
        currentYear: year,
        currentGrade: parseInt(grade)
    })

    if (students2.length > 0) {
        res.send(students2)
    } else {
        throw new Error("No student found!")
    }

})

const setStudentAttendance = asyncHandler(async (req, res) => {

    const { id, grade } = req.body

    const student = await Student.findById(id)

    student.grades[grade].attendance[student.grades[grade].attendance.length - 1].present = !(student.grades[grade].attendance[student.grades[grade].attendance.length - 1].present)
    await student.save()
})

const viewAttendance = asyncHandler(async (req, res) => {

    const { grade, year, date } = req.body

    const students = await Student.find({
        currentGrade: parseInt(grade),
        currentYear: year
    })

    let notFound = true

    students[0].grades[grade].attendance.length > 0 && students[0].grades[grade].attendance.map(a => {
        if (a.date === date) {
            notFound = false
        }
    })
    const attendances = []

    if (notFound) {
        throw new Error('No attendance found for the given day')
    }

    students.map(student => {

        const found = student.grades[grade].attendance.findIndex(a => a.date === date)

        const newStudent = {
            name: student.name,
            username: student.username,
            present: student.grades[grade].attendance[found].present
        }

        attendances.push(newStudent)

    })

    res.send(attendances)
})

const generateAttendanceReport = asyncHandler( async(req, res) => {
    const { year, grade } = req.body

    const students = await Student.find({
        currentYear: parseInt(year),
        currentGrade: parseInt(grade)
    })

   if(students.length > 0) {
       res.send(students)
   } else {
       throw new Error("No Student Found!")
   }
})

module.exports = {
    createTeacher,
    myStudents,
    getStudent,
    setStudentMark,
    getAttendance,
    setStudentRank,
    setAttendanceDate,
    setStudentAttendance,
    viewAttendance,
    generateAttendanceReport, 
}