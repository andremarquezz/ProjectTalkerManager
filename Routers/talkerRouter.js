const express = require('express');

const router = express.Router();
const { authToken } = require('../Middlewares/authToken');
const { validCreateTalker } = require('../Middlewares/validCreateTalker');
const { readTalkers } = require('../readTalkers');

const DATA_EMPTY = 0;

router
  .route('/')
  .get(readTalkers, (_req, res) => {
    const { data } = res.locals;
    const response = data.length === DATA_EMPTY ? [] : data;
    return res.status(200).send(response);
  })
  .post(authToken, validCreateTalker, (req, res) => {
    const talkerCreated = { message: 'ok' };
    res.status(201).json(talkerCreated);
  });

router.route('/:id').get(readTalkers, (req, res) => {
  const { id } = req.params;
  const { data } = res.locals;
  const response = data.filter((talker) => talker.id === Number(id))[0];
  if (!response) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).send(response);
});

module.exports = router;
