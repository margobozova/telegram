import mongoose from 'mongoose';
import Chat from '../models/chat';
import User from '../models/user';

export function createFixtures(req, res) {
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
        { user: users[0]._id, text: 'Пріівєєєт!' },
        { user: users[1]._id, text: 'Wooooof!!!' }
      ]
    },
    {
      _id: mongoose.Types.ObjectId(),
      users: users.map(user => user._id),
      messages: [
        { user: users[0]._id, text: 'Hello!' },
        { user: users[2]._id, text: 'I am the night' }
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
