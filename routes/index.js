var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DEFCON',
  desc: 'Real time emergency information',
  info:'Make sure you enable your browser notifications',
  submit: 'Get Notifications',
  other_option: 'Use Current Location'});
});

router.get('/:disaster/:location', function(req, res, next) {
  res.render(req.params.disaster, {location: req.params.location});
});

module.exports = router;
