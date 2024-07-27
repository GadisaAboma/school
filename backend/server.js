const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./config/database')

const adminRoutes = require('./routes/adminRoutes')
const studentRoutes = require('./routes/studentRoutes')
const teacherRoutes = require('./routes/teacherRoutes')
const loginRoute = require('./routes/loginRoute')
const requestRoutes = require('./routes/requestRoutes')

const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const app = express()

dotenv.config()

connectDB()

app.use(express.json())

app.use('/api/admin', adminRoutes)
app.use('/api/student', studentRoutes)
app.use('/api/teacher', teacherRoutes)
app.use('/api/all', loginRoute)
app.use('/api/request', requestRoutes)

const dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'))
    })

    console.log('production....')
} else {
    app.get('/', (req, res) => {
        console.log('API running...')
    })
}

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("server is up and listening on port " + port)
})

