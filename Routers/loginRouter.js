const express = require('express');
const crypto = require('crypto');
const { validLogin } = require('../Middlewares/validLogin');

const router = express.Router();

router.post('/', validLogin, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token });
});

module.exports = router;
