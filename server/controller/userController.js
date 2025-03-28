import userModel from "../models/userModel.js";


export const getUserData = async (req,res) => {
    try {
        const {userId} = req.body;
        console.log(req.body)
        const user = await userModel.findById(userId)
        if(!user) {
            return res.json({succes: false, message: "User not found"})
        }
        return res.json({
            succes:true,
            name: user.name,
            email:user.email,
            isAccountVerified: user.isAccountVerified
        })
    } catch (error) {
        res.json({succes:false, message:error.message})
    }
}
