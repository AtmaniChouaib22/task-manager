const notfound = require('./middleware/not-found')
const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const errorHandlerMiddleware = require('./middleware/error-handler')
const port = process.env.PORT || 3000
//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)
app.use(notfound);
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI) ;
        app.listen(port, ()=> {
            console.log(`server listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start() ;



