import mongoose from "mongoose";
import {DB_Name} from "../constants.js";
import dns from 'dns'

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
])
const connectDB = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
       console.log(`\n Mongo DB connected DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDb connection error`,error);
        process.exit(1);
    }
}


export default connectDB;