const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EventSchema = new Schema({
    description: {
        type: String,
        requiered: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    edited: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Event', EventSchema)