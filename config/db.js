import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config();

const connectDb = async () => {
    try {
      const conn = await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

export default connectDb