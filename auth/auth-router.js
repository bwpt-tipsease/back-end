const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ServiceWorkers = require('../serviceWorkers/serviceWorkers-model');

const Users = require('./users-model');

router.post('/register', (req, res) => {
  let { username, password, worker_name, description, start_date } = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  if (start_date){
    // If user entered information to register as a service worker, 
    // add to serviceWorkers first and then store ID on users table.
    ServiceWorkers.add({ worker_name, description, start_date })
      .then(res => Users.add({ username, password, service_worker_id: res.id }))
      .then(user => {
        const token = generateToken(user);
        return res.status(201).json({ user, token });
      });
  }
  // If user did not enter service worker information, the above code 
  // will not execute, and we can just add to users table.
  Users.add(user)
    .then(saved => {
      const token = generateToken(saved)
      res.status(201).json({
        user: saved,
        token
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
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
    username: user.username
  };

  const options = {
    expiresIn: '1d'
  };
 
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}


module.exports = router;
