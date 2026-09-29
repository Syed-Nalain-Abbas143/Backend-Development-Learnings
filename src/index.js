import express from 'express'
import connectDB from './db/database.js'
import 'dotenv/config'

console.log(process.env.MONGODB_URL);


connectDB();