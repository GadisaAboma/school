const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema


const gradeOneUptoFour = {
    Maths: {
        type: Number,
        required: true,
        default: 0
    },
    HPE: {
        type: Number,
        required: true,
        default: 0
    },
    Science: {
        type: Number,
        required: true,
        default: 0
    },
    Geda: {
        type: Number,
        required: true,
        default: 0
    },
    English: {
        type: Number,
        required: true,
        default: 0
    },
    AfanOromo: {
        type: Number,
        required: true,
        default: 0
    },
    total: {
        type: Number,
        required: true,
        default: 0
    },
    average: {
        type: Number,
        required: true,
        default: 0
    },
    rank: {
        type: Number,
        required: true,
        default: 0
    },


}

const gradeFiveAndSix = {
    Maths: {
        type: Number,
        required: true,
        default: 0
    },
    HPE: {
        type: Number,
        required: true,
        default: 0
    },
    Science: {
        type: Number,
        required: true,
        default: 0
    },
    Geda: {
        type: Number,
        required: true,
        default: 0
    },
    English: {
        type: Number,
        required: true,
        default: 0
    },
    AfanOromo: {
        type: Number,
        required: true,
        default: 0
    },
    Ogumma: {
        type: Number,
        required: true,
        default: 0
    },
    Muziqa: {
        type: Number,
        required: true,
        default: 0
    },
    Amharic: {
        type: Number,
        required: true,
        default: 0
    },
    Hawassa: {
        type: Number,
        required: true,
        default: 0
    },
    total: {
        type: Number,
        required: true,
        default: 0
    },
    average: {
        type: Number,
        required: true,
        default: 0
    },
    rank: {
        type: Number,
        required: true,
        default: 0
    }
}

const gradeSevenAndEigth = {
    Maths: {
        type: Number,
        required: true,
        default: 0
    },
    HPE: {
        type: Number,
        required: true,
        default: 0
    },
    Biology: {
        type: Number,
        required: true,
        default: 0
    },
    Geda: {
        type: Number,
        required: true,
        default: 0
    },
    English: {
        type: Number,
        required: true,
        default: 0
    },
    AfanOromo: {
        type: Number,
        required: true,
        default: 0
    },
    Chemistry: {
        type: Number,
        required: true,
        default: 0
    },
    Physics: {
        type: Number,
        required: true,
        default: 0
    },
    Amharic: {
        type: Number,
        required: true,
        default: 0
    },
    Hawassa: {
        type: Number,
        required: true,
        default: 0
    },
    total: {
        type: Number,
        required: true,
        default: 0
    },
    average: {
        type: Number,
        required: true,
        default: 0
    },
    rank: {
        type: Number,
        required: true,
        default: 0
    },
}

const studentSchema = new Schema({
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
    age: {
        type: String,
        requiered: true
    },
    gender: {
        type: String,
        required: true
    },
    grades: {
        1: {
            sem1: gradeOneUptoFour,
            sem2: gradeOneUptoFour,
            ava: {
                type: Number,
                required: true,
                default: 0
            },
            rank: {
                type: Number
            },
            year: {
                type: Number,
                required: true,
                default: 0
            },
            attendance: [{
                date: {
                    type: String,
                },
                present: {
                    type: Boolean,
    
                }
            }]
        },
        2: {
            sem1:  gradeOneUptoFour,
            sem2:  gradeOneUptoFour,
            ava: {
                type: Number,
                required: true,
                default: 0
            },
            rank: {
                type: Number
            },
            year: {
                type: Number,
                required: true,
                default: 0
            },
            attendance: [{
                date: {
                    type: String,
                },
                present: {
                    type: Boolean,
                    
                }
            }]
        },
        3: {
            sem1: gradeOneUptoFour,
            sem2: gradeOneUptoFour,
            ava: {
                type: Number,
                required: true,
                default: 0
            },
            rank: {
                type: Number
            },
            year: {
                type: Number,
                required: true,
                default: 0
            },
            attendance: [{
                date: {
                    type: String,
                },
                present: {
                    type: Boolean,
                    
                }
            }]
        },
        4: {
            sem1: gradeOneUptoFour,
            sem2: gradeOneUptoFour,
            ava: {
                type: Number,
                required: true,
                default: 0
            },
            rank: {
                type: Number
            },
            year: {
                type: Number
            },
            attendance: [{
                date: {
                    type: String,
                },
                present: {
                    type: Boolean,
                }
            }]
        },

        5: {
            sem1:  gradeFiveAndSix ,
            sem2:  gradeFiveAndSix ,
            ava: {
                type: Number,
                required: true,
                default: 0
            },
            rank: {
                type: Number
            },
            year: {
                type: Number,
                required: true,
                default: 0
            },
            attendance: [{
                date: {
                    type: String,
                },
                present: {
                    type: Boolean,
                }
            }]
        },

        6: {
            sem1: gradeFiveAndSix,
            sem2: gradeFiveAndSix ,
            ava: {
                type: Number,
                required: true,
                default: 0
            },
            rank: {
                type: Number
            },
            year: {
                type: Number,
                required: true,
                default: 0
            },
            attendance: [{
                date: {
                    type: String,
                },
                present: {
                    type: Boolean,
                }
            }]
        },
        7: {
            sem1:  gradeSevenAndEigth,
            sem2:  gradeSevenAndEigth,
            ava: {
                type: Number,
                required: true,
                default: 0
            },
            rank: {
                type: Number
            },
            year: {
                type: Number,
                required: true,
                default: 0
            },
            attendance: [{
                date: {
                    type: String,
                },
                present: {
                    type: Boolean,
                }
            }]
        },
        8: {
            sem1: gradeSevenAndEigth,
            sem2: gradeSevenAndEigth,
            ava: {
                type: Number,
                required: true,
                default: 0
            },
            rank: {
                type: Number
            },
            year: {
                type: Number,
                required: true,
                default: 0
            },
            attendance: [{
                date: {
                    type: String,
                },
                present: {
                    type: Boolean,
                }
            }]
        },
    },
    currentGrade: {
        type: Number,
        required: true
    },
    
    currentYear: {
        type: Number,
        required: true
    },
    request: {
        type: "String",
        default: "not request",
        required: true
        
    }
})

studentSchema.methods.matchPassword = async function (enteredPassword) {

    return await bcrypt.compare(enteredPassword, this.password)

}

studentSchema.pre('save', async function (next) {

    if(!this.isModified('password')) {
        next()
    } 

    this.password = await bcrypt.hash(this.password, 8)

})

module.exports = mongoose.model('Student', studentSchema)