import Express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import Chat from './models/chat';
import User from './models/user';

import { createFixtures } from './config';
const secret = 'BruceWayneIsBatman';

const app = Express();
const httpServer = http.Server(app);
mongoose.connect('mongodb://127.0.0.1:27017/telegram');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/setup', createFixtures);

app.get('/chats', (req, res) => {
  Chat
    .find()
    .select({ users: 1, messages: { $slice: -1 } })
    .populate('users')
    .then(chats => {
      return res.send(chats);
    });
});

app.get('/chats/:id', (req, res) => {
  Chat
    .findById(req.params.id)
    .then(chat => (
      Promise
        .all(chat.users.map(userId => User.findById(userId)))
        .then((users) => {
          chat.users = users;
          return res.send(chat);
        })
        .catch(err => console.log('Err', err))
    ));
});

app.put('/chats/:id', (req, res) => {

  Chat
    .findByIdAndUpdate(
      req.params.id,
      { $push: { messages: {
        message: req.body.message,
        user: mongoose.Types.ObjectId(req.body.user),
        date: new Date()
      } } },
      { new: true }
    )
    .then(chat => res.send(chat))
    .catch(err => res.send(500, err));
});

app.post('/login', (req, res) => {
  if (!req.body.user) { return res.send(403); }

  User
    .findOne({ name: req.body.user.name })
    .then((user) => {
      if (user) {
        if (user.password === req.body.user.password) { return user; }
        throw new Error(403);
      }

      const newUser = new User(req.body.user);
      return newUser.save();
    })
    .then((user) => {
      const token = jwt.sign(user, secret);
      res.send({ token });
    })
    .catch(err => res.send(err));
});

httpServer.listen(3000, () => console.log('Server listening on port 3000'));
