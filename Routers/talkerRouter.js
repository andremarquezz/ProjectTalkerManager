const express = require('express');

const router = express.Router();
const { readTalkers } = require('../readTalkers');

const DATA_EMPTY = 0;

router.get('/', readTalkers, (_req, res) => {
  const { payload } = res.locals;
  res.status(200).send(payload === DATA_EMPTY ? [] : payload);
});

module.exports = router;
