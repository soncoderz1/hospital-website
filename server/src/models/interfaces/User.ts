import { Document, Model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'patient' | 'doctor' | 'admin';
  createdAt: Date;
}

export interface IUserDocument extends IUser, Document {
  comparePassword(password: string): Promise<boolean>;
  generateAuthToken(): string;
}

export interface IUserModel extends Model<IUserDocument> {
  findByEmail(email: string): Promise<IUserDocument | null>;
}