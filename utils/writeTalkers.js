const fs = require('fs/promises');
const path = require('path');
const { CustomErrors } = require('../Errors/CustomErrors');

const saveTalkerCreated = async (data) => {
  await fs.writeFile(
    path.resolve(__dirname, '../talker.json'),
    JSON.stringify(data, null, 2),
  );
};

const writeTalkers = async (req, res, next) => {
  const { name, age, talk } = req.body;
  const { data } = res.locals;
  try {
    const newTalker = {
      name,
      age,
      id: data.length + 1,
      talk,
    };
    data.push(newTalker);
    res.locals.newTalker = newTalker;
    saveTalkerCreated(data);
  } catch (err) {
    throw new CustomErrors('Erro na escrita do arquivo', 400);
  }
  next();
};

module.exports = {
  writeTalkers,
};
