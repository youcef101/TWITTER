const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    fullname: {
        type: String,

    },

    profileImage: {
        type: String,
        default: null
    },
    profileCover: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    followings: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    },
    dateNaissance: {
        type: String,
        default: null
    }
},
    { timestamps: true }
)
module.exports = mongoose.model('Users', userSchema)