const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

adminSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

adminSchema.pre('save', async function(next) {

    
    if(!this.isModified('password')) {
        next()
    } 

    this.password = await bcrypt.hash(this.password, 8)
    
})

module.exports = mongoose.model('Admin', adminSchema)