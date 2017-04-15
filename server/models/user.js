import mongoose from 'mongoose';

const User = mongoose.model('user', {
  name: String,
  image: String
});

export default User;
