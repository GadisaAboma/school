const mongoose = require('mongoose')

const Schema = mongoose.Schema

const semisterSchema = new Schema({
    semister: {
        type: String,
        required: false
    }
})




module.exports = mongoose.model('Semister', semisterSchema)