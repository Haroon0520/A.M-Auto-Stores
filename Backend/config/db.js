import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:186312@cluster0.ovanjzw.mongodb.net/a-m-autostores').then(()=>console.log("shinzou sasageyo"));
}
