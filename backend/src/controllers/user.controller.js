import bcrypt from "bcryptjs"
import env from "dotenv"
import { json } from "express"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"



export const registerUser = async (req, res) => {
    const { name, email, password} = req.body

    if(!name || !password || !email) return res.status(400).json({success: false, message: "Please add all fields"})

    try {
        const userExist = await userModel.findOne({email})

        if(userExist) return res.status(400).json({success: false, message: "User already exist"})

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword
        })

        if(user) return res.status(201).json({success: true, user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        }})
        
        return res.status(400).json({success: false, message: "Failed to create user"})

    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }

    
}

export const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})

        if(user && await bcrypt.compare(password, user.password)) return res.status(201).json({success: true, user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        }})

        return res.status(400).json({success: false, message: "Invaldi credentials"})

    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

export const getMe = async (req, res) => {
    const {name, email, _id} = req.user 
    return res.status(200).json({success: true, user: {name, email, _id}})
}

//Generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}