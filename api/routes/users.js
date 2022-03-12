const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from user route !!')
})

//edit user infos
router.put('/:userId/edit', async (req, res) => {
    try {
        if (req.params.userId === req.body.userId) {
            const user = await User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true });
            res.status(200).send(user)
        } else {
            res.status(400).send('you are not allowed to edit this user !!!')
        }

    } catch (err) {
        res.status(500).send(err)
    }
})

//edit user profile photo
router.put('/:userId/edit/profile/photo', async (req, res) => {
    try {
        if (req.params.userId === req.body.userId) {
            const user = await User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true })
            res.status(200).send(user)
        } else {
            res.status(400).send('you are not allowed to edit this user !!!')
        }

    } catch (err) {
        res.status(500).send(err)
    }
})
//edit user profile couverture
router.put('/:userId/edit/profile/cover', async (req, res) => {
    try {
        if (req.params.userId === req.body.userId) {
            const user = await User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true })
            res.status(200).send(user)
        } else {
            res.status(400).send('you are not allowed to edit this user !!!')
        }

    } catch (err) {
        res.status(500).send(err)
    }
})
//delete user
router.delete('/:userId/delete', async (req, res) => {
    try {
        if (req.params.userId === req.body.userId) {
            await User.findByIdAndDelete(req.params.userId)
            res.status(200).send('account successfully deleted !!!')
        } else {
            res.status(400).send('you are not allowed to delete this account!!!')
        }

    } catch (err) {
        res.status(500).send(err)
    }
})
//get user by id
router.get('/:userId/get', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.status(200).send(user)

    } catch (err) {
        res.status(500).send(err)
    }
})
//follow user
router.put('/:userId/follow', async (req, res) => {
    const user = await User.findById(req.params.userId);
    const current_user = await User.findById(req.body.userId);
    try {
        if (req.body.userId !== req.params.userId) {
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await current_user.updateOne({ $push: { followings: req.params.userId } })
                res.status(200).send(`you are follow ${user.fullname} `)
            } else {
                res.status(400).send(`you alredy followed ${user.fullname}`)
            }
        } else {
            res.status(400).send('you can not follow yourself !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})

//unfollow user
router.put('/:userId/unfollow', async (req, res) => {
    const user = await User.findById(req.params.userId);
    const current_user = await User.findById(req.body.userId);
    try {
        if (req.body.userId !== req.params.userId) {
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await current_user.updateOne({ $pull: { followings: req.params.userId } })
                res.status(200).send(`you are unfollow ${user.fullname} `)
            } else {
                res.status(400).send(`you are not followed ${user.fullname}`)
            }
        } else {
            res.status(400).send('you can not unfollow yourself !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})
//get user followings
router.get('/:userId/followings', async (req, res) => {
    const current_user = await User.findById(req.params.userId);
    const followings = await current_user.followings;
    const users = await User.find();
    try {
        const followings_info = users.filter(user => followings.includes(user._id));
        res.status(200).send(followings_info)
    } catch (err) {
        res.status(500).send(err)
    }
})
//get user followers
router.get('/:userId/followers', async (req, res) => {
    const current_user = await User.findById(req.params.userId);
    const followers = await current_user.followers;
    const users = await User.find();
    try {
        const followers_info = users.filter(user => followers.includes(user._id));
        res.status(200).send(followers_info)
    } catch (err) {
        res.status(500).send(err)
    }
})
//get not followings  users
router.get('/:userId/notFollow', async (req, res) => {
    const current_user = await User.findById(req.params.userId);
    const followings = await current_user.followings;
    const all_users = await User.find();
    //const users = all_users.filter(user => user._id != req.params.userId)
    try {
        const not_follow = all_users.filter(user => !followings.includes(user._id));
        const unfollow_user = not_follow.filter(user => user._id != req.params.userId)
        res.status(200).send(unfollow_user)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get all users
router.get('/get/all', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})
module.exports = router