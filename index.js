// require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const url = 'mongodb://localhost:27017/mytask'
const app = express()
mongoose.connect(url, { useNewUrlparser: true })
con = mongoose.connection

con.on('open', function () {
    console.log("connected to mongo")
})
app.use(express.json())

app.use('/uploads',express.static('uploads'));

app.set('view engine', 'ejs');

app.use('/user', userRouter)
app.listen(9000, () => {
    console.log('server started')
})
// const express=require('express)
// const mongoose=require('mongoose')
// const url='mongodb://localhosst:27017/mytask'
// const app-=express()
// mongoose.connect(url,{userNew})