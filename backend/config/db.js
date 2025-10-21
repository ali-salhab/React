import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully👌");
  } catch (error) {
    console.error("MongoDB connection failed:😶‍🌫️🙄", error.message);
    process.exit(1);
  }
};

export default connectDB;
