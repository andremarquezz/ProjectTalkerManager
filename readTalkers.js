const fs = require('fs/promises');

const readTalkers = async (_req, res, next) => {
  try {
    const data = await fs.readFile('./talker.json', 'utf8');
    res.locals.data = JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
  next();
};

module.exports = {
  readTalkers,
};
