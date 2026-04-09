require('dotenv').config();

const jwt = require('jsonwebtoken');
const jwtToken = process.env.JWT_TOKEN;

exports.generateToken = (req, res) => {
  const { userName, email } = req.body;

  if (!userName || !email) {
    return res.status(400).json({ message: 'userName and email are required' });
  }

  if (!jwtToken) {
    return res.status(500).json({ message: 'JWT_TOKEN is not configured' });
  }

  const token = jwt.sign({ userName, email }, jwtToken, { expiresIn: '1h' });

  return res.json({ token });
};
