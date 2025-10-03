import mongoose from 'mongoose';

export interface IUser {
  name: string;
  email: string;
}

export const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const UserModel = mongoose.model('User', UserSchema);
