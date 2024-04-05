import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const  dbconnection =()=>{
   mongoose.connect(process.env.MONGO_URL,{
            dbName:"youtub-app-1",
    }).then(()=>{
         console.log("Database is coonected successfully");
    }).catch(error=>{
        console.log(`Database cooonetion field error is ${error}`);
    });
}