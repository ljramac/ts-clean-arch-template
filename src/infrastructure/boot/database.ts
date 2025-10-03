import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/clean-arch';

export default async () => mongoose.connect(MONGO_URI);
