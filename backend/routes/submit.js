const express = require('express');
const router = express.Router();
const Order = require('../modal/orders');

router.post('/submit', async (req, res) => {
  try {
    console.log(req.body);
    const { fname, lname, phoneNo, email, city, state, address, zipCode, dob, terms, leadid_token } = req.body;
    const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const newOrder = new Order({
      fname,
      lname,
      phoneNo,
      email,
      city,
      state,
      address,
      zipCode,
      dob,
      terms,
      leadid_token,
      ip_address,
    });
    await newOrder.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
