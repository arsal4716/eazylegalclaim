const mongoose = require('mongoose');
const model = require('../db/conn')
const orderSchema = new mongoose.Schema({
  leadid_token:{
    type: String,
  },
  ip_address:{
    type: String,
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  terms: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
