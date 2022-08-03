const { CustomErrors } = require('../Errors/CustomErrors');

const authToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
    if (authorization.length < 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  } catch (error) {
    throw new CustomErrors('Problema com a autenticação do token', 401);
  }

  next();
};

module.exports = {
  authToken,
};
