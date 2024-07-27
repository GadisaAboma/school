const mongoose = require('mongoose')

const Schema = mongoose.Schema


const gradeOneUptoFour = {
    Maths: {
        type: String,
        default: ''
    },
    HPE: {
        type: String,
        default: ''
    },
    Science: {
        type: String,
        default: ''
    },
    Geda: {
        type: String,
        default: ''
    },
    English: {
        type: String
    },
    AfanOromo: {
        type: String,
        default: ''
    }

}


const gradeFiveAndSix = {
    Maths: {
        type: String,
        default: ''
    },
    HPE: {
        type: String,
        default: ''
    },
    Science: {
        type: String,
        default: ''
    },
    Geda: {
        type: String,
        default: ''
    },
    English: {
        type: String,
        default: ''
    },
    AfanOromo: {
        type: String,
        default: ''
    },
    Ogumma: {
        type: String,
        default: ''
    },
    Muziqa: {
        type: String,
        default: ''
    },
    Amharic: {
        type: String,
        default: ''
    },
    Hawassa: {
        type: String,
        default: ''
    }

}

const gradeSevenAndEigth = {
    Maths: {
        type: String,
        default: ''
    },
    HPE: {
        type: String,
        default: ''
    },
    Biology: {
        type: String,
        default: ''
    },
    Geda: {
        type: String,
        default: ''
    },
    English: {
        type: String,
        default: ''
    },
    AfanOromo: {
        type: String,
        default: ''
    },
    Chemistry: {
        type: String,
        default: ''
    },
    Physics: {
        type: String,
        default: ''
    },
    Amharic: {
        type: String,
        default: ''
    },
    Hawassa: {
        type: String,
        default: ''
    }
}

const gradeSchema = new Schema({
    1: gradeOneUptoFour,
    2: gradeOneUptoFour,
    3: gradeOneUptoFour,
    4: gradeOneUptoFour,
    5: gradeFiveAndSix,
    6: gradeFiveAndSix,
    7: gradeSevenAndEigth,
    8: gradeSevenAndEigth
})


module.exports = mongoose.model('Grades', gradeSchema)