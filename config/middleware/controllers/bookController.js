const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Book routes working' });
});

// Add your other book routes (CRUD operations)

module.exports = router;