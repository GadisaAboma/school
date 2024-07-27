const Student = require('../models/student')
const asyncHandler = require('express-async-handler')
const Semister = require('../models/semister')

const getMyMarks = asyncHandler(async (req, res) => {

  const semister = await Semister.findOne({})
  const student = await Student.findById(req.params.id)


  res.send({
    semisterResult: student.grades[student.currentGrade][semister.semister],
    gradeAverage: student.grades[student.currentGrade].ava
  })
})

const getMyProfile = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)
  res.send(student)

})

module.exports = {
  getMyMarks,
  getMyProfile
}