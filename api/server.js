const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const commentRouter = require('./routes/comments')
const tweetRouter = require('./routes/tweets')

//.env conf
dotenv.config()
//app config
const app = express()
const port = process.env.PORT || 8001

//middlewares
app.use(express.json())
app.use(cors())

//DB config
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('connected to mongoDB !!!'))
    .catch(err => console.log(err));

//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello from server !!!')
})
//route endpoints config
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/comment', commentRouter)
app.use('/api/tweet', tweetRouter)
//listen server
app.listen(port, () => {
    console.log(`server listen on localhost: ${port}`)
})