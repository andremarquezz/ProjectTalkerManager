const express = require('express');

const router = express.Router();

const talkers = require('../talker.json');

router.get('/', (_req, res) => res.status(200).send(talkers));

module.exports = router;
