import express from "express"
import { register } from "../controller/authController.js";



const authRouter = express();

authRouter.post('/register', register)

export default authRouter;