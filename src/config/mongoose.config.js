import mongoose from "mongoose";
import { dbName } from "../contants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}?dbName=${dbName}`
    );
    console.log(`Host : ${connectionInstance.connection.host}`);
    return connectionInstance;
  } catch (error) {
    console.log("Error", error);
    process.exit(1);
  }
};

export default connectDb;
