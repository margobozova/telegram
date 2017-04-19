import mongoose from 'mongoose';

const Chat = mongoose.model('chat', new mongoose.Schema({
  created: Date,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  messages: Array
}));

export default Chat;
