const fs = require('fs/promises');
const path = require('path');
const { CustomErrors } = require('../Errors/CustomErrors');

// findIndex > https://stackoverflow.com/questions/35206125/how-can-i-find-and-update-values-in-an-array-of-objects

const saveDataEdited = async (data) => {
  await fs.writeFile(
    path.resolve(__dirname, '../talker.json'),
    JSON.stringify(data, null, 2),
  );
};

const editTalker = (req) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const editedTalker = {
    id: Number(id),
    name,
    age,
    talk,
  };
  return editedTalker;
};

const handleEditTalkers = async (req, res, next) => {
  const { id } = req.params;
  const { data } = res.locals;
  try {
    const editedTalker = editTalker(req);
    const foundIndex = data.findIndex((talker) => talker.id === Number(id));
    data[foundIndex] = editedTalker;
    res.locals.editedTalker = editedTalker;
    saveDataEdited(data);
  } catch (err) {
    throw new CustomErrors('Erro na ediçao do Talker', 400);
  }
  next();
};

module.exports = {
  handleEditTalkers,
};
