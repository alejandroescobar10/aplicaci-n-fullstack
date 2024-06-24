import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://alejoesmo:edwardjunior@cluster0.ovtdg3f.mongodb.net/merndb");
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error)
    }
}