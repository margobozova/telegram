import mongoose from 'mongoose';
import Chat from '../models/chat';
import User from '../models/user';

export function createFixtures(req, res) {

  User.remove({}).then(res => res).catch(err => err);
  Chat.remove({}).then(res => res).catch(err => err);

  const users = [
    {
      _id: mongoose.Types.ObjectId(),
      name: 'Root',
      password: '111',
      image: 'root.jpeg'
    },
    {
      _id: mongoose.Types.ObjectId(),
      name: 'Wolverine',
      password: '222',
      image: 'wolverine.jpeg'
    },
    {
      _id: mongoose.Types.ObjectId(),
      name: 'Batman',
      password: '333',
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
