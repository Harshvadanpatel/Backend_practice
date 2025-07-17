import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


const connectDB = async()=>{
    try {
        const connectinInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)

        console.log(`\n mongodb connected db host:${connectinInstance.connection.host}`);
        

        
    } catch (error) {
        console.log("mongodb connection error",error)
        process.exit(1)
    }
}

export default connectDB