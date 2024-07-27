const express = require('express')
const { addRequest, getRequests, getCountOfNewRequests, deleteRequest } = require('../controllers/requestControllers')
const { auth } = require('../middleware/auth')

const router = express.Router()

router.post('/addRequest', addRequest)
router.get('/getRequests', auth,  getRequests)
router.get('/countNewRequests', auth, getCountOfNewRequests)
router.post('/deleteRequest', auth, deleteRequest)

module.exports = router