const mongoose = require('mongoose');
const model = require('../db/conn');
const orderSchema = new mongoose.Schema({
  lead_token:{
    type: String,
    default: "3b0b8194d6844142b456e0d1b1867fac",
  },
  leadid_token: {
    type: String,
  },
  ip_address: {
    type: String,
  },
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  address: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  dob: {
    type: String,
  },
  source_url: {
    type: String,
  },
  incident_date: {
    type: String,
  },
  currently_represented: {
    type: Boolean,
  },
  needs_attorney: {
    type: String,
  },
  person_at_fault: {
    type: Boolean,
  },
  hospitalized_or_treated: {
    type: Boolean,
  },
  currently_insured: {
    type: Boolean,
  },
  injury_occurred: {
    type: Boolean,
  },
  at_fault: {
    type: Boolean,
  },
  traffic_source_id: {
    type: String,
    default: '11901',
  },
  currently_represented:{
    type: String,
  },
  needs_attorney:{
    type: String,
  },
  person_at_fault:{
    type: Boolean,
  },
  hospitalized_or_treated:{
    type: Boolean,
  },
  area_of_practice:{
    type:String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
