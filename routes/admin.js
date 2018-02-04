var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin_dash');
});

router.get('/admin/:location/:zip', function(req, res, next) {
  var disaster = {
    zip: req.params.zip,
    location: req.params.location
  };
  res.send(zip);
});



module.exports = router;
