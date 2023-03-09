require('dotenv').config()
const express=require('express')
const app =express()
const mongoose = require('mongoose')


const connectDataBase=async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    } catch (error) {
        console.log('Mongo db Connection Error '+ error)
    }
}

mongoose.connection.on('disconnected',()=>{
    console.log('Mongo db Disconnected!');
})

mongoose.connection.on('connected',()=>{
    console.log('Mongo db Connected!');
})


app.listen(process.env.PORT||3000,()=>{
    connectDataBase()
    console.log(`SERVER CONNECTED AT ${process.env.PORT}`);
})

