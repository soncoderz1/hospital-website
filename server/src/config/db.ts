import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      retryWrites: true,
      w: 'majority'
    });

    mongoose.connection.on('connected', () => {
      console.log('MongoDB Connected Successfully');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB Connection Error:', err);
    });

  } catch (error: any) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

export default connectDB;