import mongoose, { mongo } from "mongoose";

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

 export default mongoose.model("User", userShema, "Users")