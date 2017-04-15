import mongoose from 'mongoose';

const Chat = mongoose.model('chat', {
  created: Date,
  users: Array,
  messages: Array
});

export default Chat;
