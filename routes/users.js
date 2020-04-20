const express = require('express');
const router = express.Router();

// @routes    POST api/users
// @desc      Register a users
// @access    Public
router.post('/', (req, res ) => {
  res.send('Register a user');
});

module.exports = router;
