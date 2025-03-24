import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    
    const {name, email, password} = req.body
    if(!name || !email || !password){
        return res.json({success:false, message: "All field are required"})
    }
    try {
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.json({success:false, message:"User is alraed exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await userModel.create({name, email, password:hashedPassword})
    
        await user.save()
        return res.status(200).json({success:true, message:"User created!!"})
        
    } catch (error) {
            res.json({
                success:false, 
                message:error.message
            })
    }

}
