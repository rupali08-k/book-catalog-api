const express = require('express');
const router = express.Router();

// Example route – adjust according to your actual logic
router.get('/', (req, res) => {
  res.json({ message: 'User routes working' });
});

// Add your other user routes (register, login, etc.)

module.exports = router;