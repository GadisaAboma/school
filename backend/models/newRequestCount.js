const mongoose = require('mongoose')

const Schema = mongoose.Schema

const countSchema = new Schema({
    count: {
        type: Number
    }
})

module.exports = mongoose.model('RequestCount', countSchema)