import mongoose from "mongoose";
import { use } from "react";

const userSchema =  new mongoose.Schema(
    {
        userId : {
            type: String,
            required : true,
            unique: true,
            lowercase : true,
            trim : true,
            index: true, // for searching in database , agar har jagah kar diya to performance gir jaati     
        },
        email : {
            type: String,
            required : true,
            unique: true,
            lowercase : true,
            trim : true,
        },
        name : {
            type: String,
            required : true,
            trim : true,
            index: true,
        },
        image:{
            type: String,
            required:true,
             // cloudinary url
        },
    },
    {
        timestamps:true
    }
)

export const User = mongoose.model('User',userSchema)