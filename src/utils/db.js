require("dotenv").config();
const mongoose = require("mongoose");

const mongoConnection = process.env.MONGO_URI; // Load from .env

mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        await mongoose.connect(mongoConnection);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ No DB connection!", error);
        process.exit(1);
    }
};

module.exports = connectDB;
