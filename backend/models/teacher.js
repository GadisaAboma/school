const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    major: {
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

    assigned: [{
        assignedGrade: {
            type: String,
            required: false
        },
        assignedSubject: {
            type: String,
            requiered: false
        },
        assignedYear: {
            type: Number,
            required: false
        }
    }],
    homeRoomGrade: {
        type: String,

    },
    homeRoomYear: {
        type: Number,

    },
    permissionToRegister: {
        type: Boolean,
        default: false,
        required: true
    }
})

teacherSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


teacherSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {
        next()
    }
    
    this.password = await bcrypt.hash(this.password, 8)

})

module.exports = mongoose.model('Teachers', teacherSchema)