const express = require('express')
const taskRouter = require('./todo/task.router').router

const app = express()

app.use(express.json())

app.use('/api/v1', taskRouter)

app.listen(10000, ()=>{
    console.log('Server started at server 10000')
})