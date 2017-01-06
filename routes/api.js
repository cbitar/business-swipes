var router = require('express').Router();
var businessesCtrl = require('../controllers/businesses');

/* GET home page. */
router.get('/businesses', businessesCtrl.getBusinesses);
router.put('/businesses', businessesCtrl.updateBusiness);

module.exports = router;
