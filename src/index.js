import express from 'express'
import connectDB from './db/database.js'
import 'dotenv/config'
import { app } from './app.js';

connectDB()
.then(()=>{

    app.listen(process.env.PORT||8000,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })

})
.catch((err)=>{
    console.log(`MongoDB connection failed`,err);
})