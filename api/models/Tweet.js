const mongoose = require('mongoose')
const tweetSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    hashTag: {
        type: String,
        default: null
    },
    content: {
        type: String,
        require: true
    },
    tweetImage: {
        type: String,
        default: null

    },
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
)
module.exports = mongoose.model('Tweets', tweetSchema)