import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(
      "mongodb+srv://alysalhab5_db_user:<db_password>@cluster0.kre45bt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected successfully👌");
  } catch (error) {
    console.error("MongoDB connection failed:😶‍🌫️🙄", error.message);
  }
};

export default connectDB;
