const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./users-model');

router.post('/register', (req, res) => {
  let user = req.body; 
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  let { email, password } = req.body;
  Users.add(user)
    .then(saved => {
      if (email && password) {
        const token = generateToken(saved)
        res.status(201).json({
          user: saved,
          token
        });
      }else {
        res.status(404).json({ message: 'Please insert a email and a password' })
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.email}!`,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    sub: user.id,
    email: user.email
  };

  const options = {
    expiresIn: '1d'
  };
 
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}


module.exports = router;
