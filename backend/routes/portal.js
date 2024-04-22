const express = require('express');
const router = express.Router();
const Order = require('../modal/orders'); // Assuming you have a model defined for your orders

router.get('/portal', async (req, res) => {
  try {
    // Fetch data from the database
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
