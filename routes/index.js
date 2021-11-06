const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Testing 101');
});

module.exports = router;
