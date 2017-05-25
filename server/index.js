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
  const token = req.headers['x-access-token'];
  if (!token) { return res.send(403); }
  jwt.verify(token, secret, (err, user) => {
    Chat
      .find({ users: mongoose.Types.ObjectId(user._id) })
      .select({ users: 1, messages: { $slice: -1 } })
      .populate('users')
      .then(chats => {
        return res.send(chats);
      });
  });
});

app.get('/users', (req, res) => {
  User
    .find()
    .then(users => res.send(users));
});

app.get('/chats/:id', (req, res) => {
  const token = req.headers['x-access-token'];
  if (!token) { return res.send(403); }

  jwt.verify(token, secret, (err) => {
    if (err) { res.send(403); }

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
});

app.put('/chats/:id', (req, res) => {
  const token = req.headers['x-access-token'];
  if (!token) { return res.send(403); }

  jwt.verify(token, secret, (err) => {
    if (err) { res.send(403); }

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
      const token = jwt.sign(user.toObject(), secret);
      res.send({
        name: user.name,
        token
      });
    })
    .catch(err => res.send(err));
});

httpServer.listen(3000, () => console.log('Server listening on port 3000'));
