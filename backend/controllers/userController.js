import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// Login User
const loginUser = async (req,res) => {
    const {email,password} = req.body;

    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success:false,message:"User doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}


// Registered User
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false,message:"User already exists"})
        }

        // Validating Email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter valid email"})
        }

        if (password.length < 8) {
            return res.json({success:false,message:"Please enter strong password"})
        }

        // password encryption (Hashing)
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)


        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}