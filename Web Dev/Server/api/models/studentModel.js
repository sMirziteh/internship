'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
  email: {
    type: String,
    requied: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  emailConfirmed: {
    type: Boolean,
    default: false
  },
  accountCreatedDate: {
    type: Date,
    default: Date.now
  },
  lastLoggedInDate: {
    type: Date,
    default: null
  },
  lastLoggedInIP: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('Students', StudentSchema);
