const express = require('express');
const crypto = require('crypto');

const talkerRouter = require('./Routers/talkerRouter');
const { validLogin } = require('./Middlewares/validLogin');
require('express-async-errors');

const app = express();

app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/talker', talkerRouter);

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', validLogin, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token });
});

app.use((err, _req, res, _next) => {
  res.status(err.code || 500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log('Online');
});
