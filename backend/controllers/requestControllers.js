const Request = require('../models/requests')
const asyncHandler = require('express-async-handler') 
const RequestCount = require('../models/newRequestCount')

const addRequest = asyncHandler(async (req, res) => {

    const { username } = req.body
    const rr = await Request.findOne({username})

    if(rr) {
      throw new Error("Already sent!")
    }
  
    const request = new Request({
           ...req.body
    })
    await request.save()

    const requestCount = await RequestCount.find({})

    requestCount[0].count += 1

     await requestCount[0].save()

    res.send("Request sent!")

})

const getRequests = asyncHandler(async (req, res) => {

    const requests = await RequestCount.find({})

    requests[0].count = 0

    await requests[0].save()
  
    const request = await Request.find({})

    res.send(request)

})

const getCountOfNewRequests = asyncHandler( async (req, res) => {

    const requestsCount = await RequestCount.findOne({})

     res.send(requestsCount.count.toString())
})


const deleteRequest = asyncHandler( async (req, res) => {
    const { username } = req.body

    const request = Request.findOne({username})

    await request.deleteOne()
})

module.exports =  {
   addRequest,
   getRequests,
   getCountOfNewRequests,
   deleteRequest
}