import { ApiError } from "../utils/ApiError.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {User} from "../models/user.model.js"
import { upload } from "../middlewares/multer.middleware.js"

const registerUser = asyncHandler( async(req,res)=>{


    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res



    // get user details from frontend
    const {fullName,email,username,password}=req.body
    console.log("email:",email)



    // validation - not empty


    // if(fullName ==="" || email==="" || username==="" || password===""){
    //     throw new ApiError(400,"All field is required")
    // }
    if(
        [fullName,email,username,password].some((field)=>
        field?.trim()==="")
    ){
        throw new ApiError(400,"All field are required")
    }
    console.log("fullname: ",fullName)
    

    const existedUser = User.findOne({
        $or:[{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"User with email or username already exists")
    }


    req.files?.avtar[0].path


})
export {registerUser,}