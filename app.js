const express = require('express')
const app = express()
const task = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notfound = require('./middleware/not-found')

//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
app.use('/api/v1/tasks', task)

app.use(notfound)

const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(` server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()




