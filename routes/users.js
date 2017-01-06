var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Business = require('../models/business');
var token = require('../config/token-auth');
var jwt = require('jsonwebtoken');

var secret = 'shhhhhutup';

var jwtOptions = {
 algorithm: 'HS256',
 expiresIn: '7 days'
};

router.post('/login', token.create);

router.post('/form-business', function(req, res, next) {
  Business.create(req.body, function(err, newBusiness) {
    if(err) return res.status(400).json({error: 'Invalid new business'});
    var token = jwt.sign({ user: newBusiness }, secret, jwtOptions);
    return res.json({
      token: token
    });
  });
})

// router.post('/form-student', function(req, res, next) {
//   Student.create(req.body, function(err, newStudent) {
//     if(err) return res.status(400).json({error: 'Invalid new student'});
//     var token = jwt.sign({ user: newStudent }, secret, jwtOptions);
//     return res.json({
//       token: token
//     });
//   });
// })

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
