const express = require('express')
const Comment = require('../models/Comment')
const Tweet = require('../models/Tweet')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from comment route !!')
})

//add comment
router.post('/add', async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(200).send(comment)
    } catch (err) {
        res.status(500).send(err)
    }
})

//edit comment
router.put('/:commentId/edit', async (req, res) => {
    const current_comment = await Comment.findById(req.params.commentId);
    try {
        if (current_comment.userId === req.body.userId) {
            await Comment.updateOne(req.body);
            res.status(200).send('your comment successfully updated !!!')
        } else {
            res.status(400).send('your are not allowed to modify this comment !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})

//delete comment
router.delete('/:commentId/delete', async (req, res) => {
    const current_comment = await Comment.findById(req.params.commentId);
    try {
        if (current_comment.userId === req.body.userId) {
            await Comment.findByIdAndDelete(req.params.commentId);
            res.status(200).send('comment deleted successfully !!!')
        } else {
            res.status(400).send('your are not allowed to delete this comment !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})

//get tweet comment
router.get('/:tweetId/all', async (req, res) => {
    const current_tweet = await Tweet.findById(req.params.tweetId);
    const comments = await Comment.find()
    try {
        const tweet_comment = comments.filter(comment => comment.tweetId == current_tweet._id);
        res.status(200).send(tweet_comment)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get all comments
router.get('/all/get', async (req, res) => {

    try {
        const comments = await Comment.find();
        res.status(200).send(comments)
    } catch (err) {
        res.status(500).send(err)
    }
})


module.exports = router