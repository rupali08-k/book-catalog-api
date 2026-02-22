require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');          // if db.js is inside config
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));