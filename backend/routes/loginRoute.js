const express = require('express')
const { loginUser, getCurrentSemister, passStudent } = require('../controllers/loginController')
const router = express.Router()

router.post('/login', loginUser)
router.post('/pass/:id', passStudent)
router.get('/semister', getCurrentSemister)

module.exports = router