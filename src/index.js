//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:'.env'
})




connectDB()

























// function connectDB(){}
// connectDB()
/*
import express from "express"

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log(("ERROR",error))
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listning on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()






( async()=>{
    try {

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log(`ERROR : ${error}`)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is run in port :${process.env.PORT}`)
        })

        
    } catch (error) {
        console.error(`ERROR:${error}`)
    }
})()
    */