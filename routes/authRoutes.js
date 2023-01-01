const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('this is the auth main page');
});

router.post('/register', postRegister);

router.post('/login', (req, res) => {
  res.send('login route');
});

module.exports = router;