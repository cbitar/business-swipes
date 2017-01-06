var Business = require('../models/business');
var jwt = require('jsonwebtoken');
var secret = 'shhhhhutup';

var jwtOptions = {
 algorithm: 'HS256',
 expiresIn: '7 days'
};

function authenticate(req, res, next) {
  var authHeader = req.get('Authorization');

  if (!authHeader) {
    return res.status(400).json({error: 'Bad credentials'});
  }

  var token = authHeader.split(' ')[1]

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return next(err)
    req.decoded = decoded;
    next()
  });
}

// function create(req, res, next) {
//   if (!req.body.email || !req.body.password) {
//     return res.status(400).json({error: 'Bad credentials'});
//   }
//   Promise.all([
//     Business.findOne({email: req.body.email}),
//   ]).then(users => {
//     // [student, teacher] = users;
//     var business = users;
//     return business
//   }).then((user) => {
//     if ( !user || !user.verifyPasswordSync(req.body.password) ) {
//       return res.status(400).json({error: 'Bad credentials'});
//     } else {
//       var token = jwt.sign({ user: user }, secret, jwtOptions);
//       return res.json({
//         token: token
//       });
//     }
//   }).catch((err) => next(err));
// }


function create(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return next({
      status: 401,
      message: 'Missing required fields: username and password'
    })
  }
  Business.findOne({email: req.body.email})
    .then((user) => {
      if ( !user || !user.verifyPasswordSync(req.body.password) ) {
        return next({
          message: 'Business not found or password incorrect.',
          status: 403
        });
      }
      var token = jwt.sign({ user: user }, secret, jwtOptions);
      return res.json({
        token: token
      });
    });
}








module.exports = {
 create: create,
 authenticate: authenticate
};
