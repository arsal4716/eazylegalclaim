const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/accident')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

module.exports = db;