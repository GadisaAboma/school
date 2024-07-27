const express = require('express')
const { getMyMarks, getMyProfile } = require('../controllers/studentControllers')
const router = express.Router()


router.get('/getMyMarks/:id', getMyMarks)
router.get('/myProfile/:id', getMyProfile)


module.exports = router