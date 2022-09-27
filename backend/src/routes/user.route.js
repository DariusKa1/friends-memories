import express from "express"
import { registerUser, loginUser, getMe } from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me",protect, getMe);


export default router;