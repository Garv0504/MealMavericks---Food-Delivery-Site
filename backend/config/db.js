import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://garv51104:garv2004@cluster0.smnrlh5.mongodb.net/Fooddel').then(()=>console.log("DB Connected"));
}