const fs = require('fs/promises');
const path = require('path');
const { CustomErrors } = require('../Errors/CustomErrors');

const readTalkers = async (_req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../talker.json'), 'utf8');
    res.locals.data = JSON.parse(data);
  } catch (err) {
    throw new CustomErrors('Erro na leitura do arquivo', 400);
  }
  next();
};

module.exports = {
  readTalkers,
};
