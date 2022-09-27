import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"

export const protect = async (req, res, next) => {
    let token 

    if(!req.headers.authorization) return res.status(400).json({success: false, message: "No Authorization provided"})
        try {
            token = req.headers.authorization.split(" ")[1]

            if(!token) return res.status(401).json({success: false, message: "User no authorized, no token"})

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            const user = await userModel.findById(decoded.id).select("-password")

            if(!user) return res.status(400).json({success: false, message: "User is not authorized"})

            req.user = user

            next()

        } catch (error) {
            console.log(error)
            return res.status(401).json({success: false, message: error.message})
        }
}