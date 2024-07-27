const mongoose = require('mongoose')

const Schema = mongoose.Schema

const requestSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    username: {
        unique: true,
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Request', requestSchema)