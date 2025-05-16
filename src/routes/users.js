const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
  res.json({ message: 'Hello from Fargate backend!' });
});

module.exports = router;
