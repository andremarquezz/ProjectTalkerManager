const fs = require('fs/promises');
const path = require('path');
const { CustomErrors } = require('../Errors/CustomErrors');

const saveDataEdited = async (data) => {
  await fs.writeFile(
    path.resolve(__dirname, '../talker.json'),
    JSON.stringify(data, null, 2),
  );
};

const deleteTalkers = (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = res.locals;
    const newData = data.filter((talker) => talker.id !== Number(id));
    saveDataEdited(newData);
  } catch (error) {
    throw new CustomErrors('Problema para deletar talker', 400);
  }

  next();
};

module.exports = {
  deleteTalkers,
};
