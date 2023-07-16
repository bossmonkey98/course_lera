import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        reqired:true,
        min:2,
        max:50
    },
    lastName:{
        type:String,
        reqired:true,
        min:2,
        max:50
    },
    email:{
        type:String,
        reqired:true,
    },
    password:{
        type:String,
        required:true,
        min:8,
    },
    phoneNumber:{
        type:Number,
        min:10,
        max:10
    },
    picture:{
        type:String,
        default:''
    }
},{timestamps:true})


const User = mongoose.model("User",userSchema)

export default User