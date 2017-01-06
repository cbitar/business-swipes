var Business = require('../models/business');
var jwt = require('jsonwebtoken');
var secret = 'shhhhhutup';

var jwtOptions = {
 algorithm: 'HS256',
 expiresIn: '7 days'
};

module.exports = {
  getBusinesses: getBusinesses,
  updateBusiness: updateBusiness
};

function getBusinesses(req, res) {
  Business.find({}, function(err, business) {
    if (err) return res.status(err.statusCode || 500).json(err);
    res.json(business);
  });
}

function updateBusiness(req, res) {
  Business.findByIdAndUpdate(req.body._id, req.body, {new: true}, function(err, business) {
    if (err) return res.status(err.statusCode || 500).json(err);
    var token = jwt.sign({ business: business }, secret, jwtOptions);
    return res.json({
      token: token
    });
  });
}
