require('dotenv').config()

var mongoose = require('./database');

var User = require('../models/user');
var Business = require('../models/business');

var businesses = [
  {email: 'admin', password: 'admin', name:"Clarissa", level: 'advanced', price_per_lesson: '$60', length_per_lesson: '30min', instrument: 'guitar'},
  {email: 'askit', password: 'abc123', name: "Jim", level: 'advanced', price_per_lesson: '$60', length_per_lesson: '30min', instrument: 'guitar'},
  {email: 'lr', password: 'cool', name: "Karlos", level: 'advanced', price_per_lesson: '$60', length_per_lesson: '30min', instrument: 'guitar'}
];


Business
  .remove({})
  .then(() => {
    console.log('Emptying and seeding database...');
    return Business.create(businesses);
  })
  .then((businesses) => {
    console.log(`Seeded ${businesses.length} businesses`);
  })
  .then(() => {
    return Business.remove({})
  })
  .then(() => {
    console.log('Emptying and seeding database...');
    return Business.create(businesses);
  })
  .then((businesses) => {
    console.log(`Seeded ${businesses.length} businesses`);
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    process.exit()
  });
