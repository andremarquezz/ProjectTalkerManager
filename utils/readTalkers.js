const fs = require('fs/promises');
const { CustomErrors } = require('../Errors/CustomErrors');

// const data2 = require('../talker.json');

// console.log(data2);

const readTalkers = async (_req, res, next) => {
  try {
    const data = await fs.readFile('../talker.json', 'utf8');
    console.log(data);
    res.locals.data = JSON.parse(data);
  } catch (err) {
    console.log(err);
    throw new CustomErrors('Erro na leitura do arquivo', 400);
  }
  next();
};

module.exports = {
  readTalkers,
};
