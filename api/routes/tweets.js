const express = require('express')
const router = express.Router()
const Tweet = require('../models/Tweet')
const User = require('../models/User')

router.get('/', (req, res) => {
    res.status(200).send('hello from tweet route !!')
})

//add new tweet
router.post('/add', async (req, res) => {
    try {
        const tweet = await Tweet.create(req.body)
        res.status(200).send(tweet)
    } catch (err) {
        res.status(500).send(err)
    }
})

//edit tweet
router.put('/:tweetId/edit', async (req, res) => {
    const current_tweet = await Tweet.findById(req.params.tweetId);
    try {
        if (current_tweet.userId === req.body.userId) {
            await Tweet.updateOne(req.body);
            res.status(200).send('your tweet successfully updated !!!')
        } else {
            res.status(400).send('your are not allowed to modify this tweet !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})
//delete tweet
router.delete('/:tweetId/delete', async (req, res) => {
    const current_tweet = await Tweet.findById(req.params.tweetId);
    try {
        if (current_tweet.userId === req.body.userId) {
            await Tweet.findByIdAndDelete(req.params.tweetId);
            res.status(200).send('tweet deleted successfully !!!')
        } else {
            res.status(400).send('your are not allowed to delete this tweet !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})
//like tweet
router.put('/:tweetId/like', async (req, res) => {
    const tweet = await Tweet.findById(req.params.tweetId);
    try {

        if (!tweet.likes.includes(req.body.userId)) {
            const like = await Tweet.findByIdAndUpdate(req.params.tweetId, { $push: { likes: req.body.userId } }, { new: true })
            //const id = like.likes.find(id => id === req.body.userId)
            res.status(200).send(like)
        } else {
            const like = await Tweet.findByIdAndUpdate(req.params.tweetId, { $pull: { likes: req.body.userId } }, { new: true })
            res.status(200).send(like)
        }

    } catch (err) {
        res.status(500).send(err)
    }
})
//get all tweet of followings + current_user tweet  (for acceuil)
router.get('/:userId/all', async (req, res) => {
    const current_user = await User.findById(req.params.userId);
    const user_followings = await current_user.followings;
    const all_tweet = await Tweet.find();
    try {
        const current_user_tweet = all_tweet.filter(tweet => tweet.userId == req.params.userId)
        const tweets = all_tweet.filter(tweet => user_followings.includes(tweet.userId));
        const sorted_tweets = tweets.concat(current_user_tweet).sort((a, b) => {
            return b.createdAt - a.createdAt
        })

        res.status(200).send(sorted_tweets)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get timeline tweet (current_user tweet for profile)
router.get('/:userId/get/timeline', async (req, res) => {
    try {
        const all_tweet = await Tweet.find();
        const timeline = all_tweet.filter(tweet => tweet.userId == req.params.userId)
        const sorted_timeline_tweets = timeline.sort((a, b) => {
            return b.createdAt - a.createdAt
        })
        res.status(200).send(sorted_timeline_tweets)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get tweet by id
router.get('/:tweetId/get', async (req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.tweetId)
        res.status(200).send(tweet)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get all tweets
router.get('/all/get', async (req, res) => {
    try {
        const tweet = await Tweet.find();
        res.status(200).send(tweet)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router