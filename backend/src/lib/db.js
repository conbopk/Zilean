import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async () => {
    try {
        if (!ENV.DATABASE_URL) {
            throw new Error("DATABASE URL is not defined in environment variables");
        }
        const connect = await mongoose.connect(ENV.DATABASE_URL);
        // console.log("Connected to MongoDB:", connect.connection.host);
    } catch (e) {
        console.error("Error connecting to MongoDB", e);
        process.exit(1);
    }
};