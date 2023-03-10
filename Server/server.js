require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const AuthRoute = require('./Routes/AuthRoute')
const HotelsRoute = require('./Routes/HotelsRoute')
const RoomsRoute = require('./Routes/RoomsRoute')
const UsersRoute = require('./Routes/UsersRoute')

const connectDataBase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    } catch (error) {
        console.log('Mongo db Connection Error ' + error)
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('Mongo db Disconnected!');
})

mongoose.connection.on('connected', () => {
    console.log('Mongo db Connected!');
})

/*Middlewares */
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

/*Routes That Should Handle Req */
app.use('/api/v1/auth', AuthRoute)
app.use('/api/v1/hotels', HotelsRoute)
app.use('/api/v1/rooms', RoomsRoute)
app.use('/api/v1/users', UsersRoute)

app.listen(process.env.PORT || 3000, () => {
    connectDataBase()
    console.log(`SERVER CONNECTED AT ${process.env.PORT}`);
})

