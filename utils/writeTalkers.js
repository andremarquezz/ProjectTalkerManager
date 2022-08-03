const fs = require('fs/promises');
const path = require('path');
const { CustomErrors } = require('../Errors/CustomErrors');

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
    console.log(data);
    res.locals.newTalker = newTalker;
    await fs.writeFile(path.resolve(__dirname, '../talker.json'), JSON.stringify(data, null, 2));
  } catch (err) {
    console.log({ err });
    throw new CustomErrors('Erro na escrita do arquivo', 400);
  }
  next();
};

module.exports = {
  writeTalkers,
};
