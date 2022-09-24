import bcrypt from "bcryptjs"
import env from "dotenv"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"


export const signIn = async (req, res) => {
    env.config();
    const JWT_SECRET = process.env.JWT_SECRET;
    console.log(JWT_SECRET);
    const { email, password } = req.body;
    try {
        const existingUser = await doesUserExist(email);
        if(!existingUser) return res.status(404).json({success: false, message:"User doesn't exist"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({success: false, message:"Invalid password"});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'TEST', {expiresIn: "1h"});

        return res.status(200).json({ result: existingUser, token});
    } catch (error) {
        return res.status(500).json({success: false, error: error.message});
    }     
}

export const signUp = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName} = req.body;
    try {
        const existingUser = await doesUserExist(email);
        if(existingUser) return res.status(400).json({success: false, message:"User already exist"});

        if(password !== confirmPassword) return res.status(400).json({success: false, message:"Please match passwords"});
        const hashedPassword = await bcrypt.hash(password, 12);
        const createdUser = await userModel.create({name: `${firstName} ${lastName}`, email, password: hashedPassword})
        const token = jwt.sign({email: createdUser.email, id: createdUser._id}, 'TEST', {expiresIn: "1h"});
        console.log(token);

        return res.status(200).json({ result: createdUser, token: token});
    } catch (error) {
        return res.status(500).json({success: false, error: error.message});
    }
  
}

const doesUserExist = async (email) =>{
    return await userModel.findOne({email});
}