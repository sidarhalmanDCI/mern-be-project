import express from "express"
import { register, login, logout, verifyOTP, verifyEmail, isAuthenticated, sendResetOtp, resetPassword } from "../controller/authController.js";
import userAuth from "../middleware/userAuth.js";

const authRouter = express();

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)
authRouter.post('/send-verify-otp', userAuth, verifyOTP )
authRouter.post('/verify-account', userAuth, verifyEmail )
authRouter.post('/is-auth', userAuth, isAuthenticated)
authRouter.post('/send-reset-otp', sendResetOtp )
authRouter.post('/reset-password', resetPassword)
/*
authRouter
    .post( '/change-user-name', 
            userAuth(* das bring mir userId * Middleware), 
            changeUserName)
 */
export default authRouter;