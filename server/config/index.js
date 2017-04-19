import mongoose from 'mongoose';
import Chat from '../models/chat';
import User from '../models/user';

export function createFixtures(req, res) {

  User.remove({}).then(res => console.log(res)).catch(err => console.log(err));
  Chat.remove({}).then(res => console.log(res)).catch(err => console.log(err));

  const users = [
    {
      _id: mongoose.Types.ObjectId(),
      name: 'Root',
      image: 'root.jpeg'
    },
    {
      _id: mongoose.Types.ObjectId(),
      name: 'Wolverine',
      image: 'wolverine.jpeg'
    },
    {
      _id: mongoose.Types.ObjectId(),
      name: 'Batman',
      image: 'batman.png'
    }
  ];

  const chats = [
    {
      _id: mongoose.Types.ObjectId(),
      users: users.map(user => user._id),
      messages: [
        { user: users[0]._id, message: 'Пріівєєєт!', date: new Date() },
        { user: users[1]._id, message: 'Wooooof!!!', date: new Date() }
      ]
    },
    {
      _id: mongoose.Types.ObjectId(),
      users: users.map(user => user._id),
      messages: [
        { user: users[0]._id, message: 'Hello!', date: new Date() },
        { user: users[2]._id, message: 'I am the night', date: new Date() }
      ]
    }
  ];

  users.forEach((user) => {
    const newUser = new User(user);
    return newUser.save();
  });

  chats.forEach((chat) => {
    const newChat = new Chat(chat);
    return newChat.save();
  });

  return res.sendStatus(200);
}

export default {
  createFixtures
};
