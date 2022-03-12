const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    tweetId: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    commentImage: {
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
module.exports = mongoose.model('Comments', commentSchema)