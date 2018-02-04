var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin_dash');
});

router.get('/:type/:zip', function(req, res, next) {
  var disaster = {
    type: req.params.type,
    zip: req.params.zip
  }
  res.send(disaster);
});

module.exports = router;
