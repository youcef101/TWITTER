const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from auth route !!')
})

//register
router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(req.body.password, salt);
    const newUser = {
        firstname: req.body.firstname,
        lastname: req.body.firstname,
        email: req.body.email,
        fullname: req.body.firstname + ' ' + req.body.lastname,
        password: hashed_password,
        password_confirm: req.body.password_confirm
    }
    const email = await User.findOne({ email: req.body.email });
    if (email) {
        res.status(400).send('email already exists !!!')
    }
    else if (req.body.password !== req.body.password_confirm) {
        res.status(400).send('password didnt match !!!')
    } else {
        try {
            await User.create(newUser);
            res.status(200).send('Account successfully created !!!')
        } catch (err) {
            res.status(500).send(err)
        }
    }
})

//login
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    try {
        if (user) {
            const password = await bcrypt.compare(req.body.password, user.password)
            if (password) {
                res.status(200).send(user);
            } else {
                res.status(400).send('password didnt match !!!')
            }
        } else {
            res.status(400).send('user does not exists !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }

})

module.exports = router