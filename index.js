const express = require('express');
require('express-async-errors');

const talkerRouter = require('./Routers/talkerRouter');
const loginRouter = require('./Routers/loginRouter');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/talker', talkerRouter);
app.use('/login', loginRouter);

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use((err, _req, res, _next) => {
  res.status(err.code || 500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log('Online');
});
