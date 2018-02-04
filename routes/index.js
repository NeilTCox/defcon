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


router.get('/nuclearstrike', function(req, res, next){
  res.render('nuclearstrike', { alert_desc: 'BALLISTIC MISSLE THREAT INBOUND TO HAWAII. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL'});
});

router.get('/:disaster', function(req, res, next) {
  res.render(req.params.disaster);
});
module.exports = router;
