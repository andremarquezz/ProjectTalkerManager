const validLogin = (req, res, next) => {
  const { email, password } = req.body;
  const validateEmailInputRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = validateEmailInputRegex.test(email);

  if (!isEmailValid) return res.status(401).json({ message: 'invalid email' });

  if (!password) return res.status(401).json({ message: 'invalid password' });

  next();
};

module.exports = {
  validLogin,
};
