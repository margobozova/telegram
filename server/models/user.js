import mongoose from 'mongoose';

const User = mongoose.model('user', new mongoose.Schema({
  name: String,
  password: String,
  image: String
}));

export default User;
