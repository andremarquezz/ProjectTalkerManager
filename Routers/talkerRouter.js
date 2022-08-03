const express = require('express');

const router = express.Router();
const { authToken } = require('../Middlewares/authToken');
const { validCreateTalker } = require('../Middlewares/validCreateTalker');
const { deleteTalkers } = require('../utils/deleteTalkers');
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

router.get('/search', authToken, readTalkers, (req, res) => {
  const { q: searchTerm } = req.query;
  const { data } = res.locals;
  if (!searchTerm) return res.status(200).json(data);
  const dateFiltered = data.filter((talker) => talker.name.includes(searchTerm));
  if (!dateFiltered) return res.status(200).send([]);
  return res.status(200).send(dateFiltered);
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
  .delete(authToken, readTalkers, deleteTalkers, (req, res) => {
    res.status(204).end();
  });

module.exports = router;
