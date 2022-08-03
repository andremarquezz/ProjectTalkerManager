const express = require('express');

const router = express.Router();
const { authToken } = require('../Middlewares/authToken');
const { validCreateTalker } = require('../Middlewares/validCreateTalker');
const { handleEditTalkers } = require('../utils/editTalkers');
const { readTalkers } = require('../utils/readTalkers');
const { writeTalkers } = require('../utils/writeTalkers');

const DATA_EMPTY = 0;

router
  .route('/')
  .get(readTalkers, (_req, res) => {
    const { data } = res.locals;
    const response = data.length === DATA_EMPTY ? [] : data;
    return res.status(200).send(response);
  })
  .post(authToken, validCreateTalker, readTalkers, writeTalkers, (_req, res) => {
    const { newTalker } = res.locals;
    res.status(201).json(newTalker);
  });

router
  .route('/:id')
  .get(readTalkers, (req, res) => {
    const { id } = req.params;
    const { data } = res.locals;
    const response = data.filter((talker) => talker.id === Number(id))[0];
    if (!response) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).send(response);
  })
  .put(authToken, readTalkers, validCreateTalker, handleEditTalkers, (_req, res) => {
    const { editedTalker } = res.locals;
    res.status(200).json({ ...editedTalker });
  })
  .delete(authToken, readTalkers, (req, res) => {
    // const { id } = req.params;
    res.status(204).end();
  });

module.exports = router;
