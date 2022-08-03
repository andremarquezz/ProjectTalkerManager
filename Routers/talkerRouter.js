const express = require('express');

const router = express.Router();
const { readTalkers } = require('../readTalkers');

const DATA_EMPTY = 0;

router.get('/', readTalkers, (_req, res) => {
  const { data } = res.locals;
  const response = data.length === DATA_EMPTY ? [] : data;
  res.status(200).send(response);
});

module.exports = router;
