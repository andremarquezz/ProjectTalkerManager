const fs = require('fs/promises');
const { CustomErrors } = require('../Errors/CustomErrors');
const data = require('../talker.json');

const writeTalkers = async (req, res, next) => {
  const { name, age, talk } = req.body;
  try {
    const newTalker = {
      name,
      age,
      id: data.length + 1,
      talk,
    };
    console.log(JSON.stringify(newTalker));
    res.locals.newTalker = newTalker;
    await fs.writeFile('../talker.json', JSON.stringify(newTalker));
  } catch (err) {
    console.log(err);
    throw new CustomErrors('Erro na escrita do arquivo', 400);
  }
  next();
};

module.exports = {
  writeTalkers,
};
