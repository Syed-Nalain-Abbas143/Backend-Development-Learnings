import express from 'express'
import connectDB from './db/database.js'
import 'dotenv/config'

console.log(process.env.MONGODB_URL);


// we can write database code in index file but it's not good practice
// ;(
//     async () => {
//     try {
//        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
//        console.log(`\n Mongo DB connected DB Host : ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log(`MongoDb connection error`,error);
//         process.exit(1);
//     }
// }
// )()


connectDB();