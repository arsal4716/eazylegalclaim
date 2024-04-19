const express = require('express');
const router = express.Router();
const Order = require('../modal/orders');

router.post('/submit', async (req, res) => {
  try {
    console.log(req.body);
    const { 
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
      incident_date, 
      injury_occurred, 
      at_fault,
      currently_represented,
      needs_attorney,
      person_at_fault,
      hospitalized_or_treated,
      area_of_practice,
      currently_insured,
    } = req.body;
    const ip_address = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const source_url = req.headers.referer;
    const traffic_source_id = '11901';
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
      source_url,
      incident_date,
      injury_occurred,
      at_fault,
      currently_represented,
      needs_attorney,
      person_at_fault,
      hospitalized_or_treated,
      area_of_practice,
      currently_insured,
      traffic_source_id 
    });
    await newOrder.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
