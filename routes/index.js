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
  res.render('nuclearstrike', { alert_desc: 'BALLISTIC MISSLE THREAT INBOUND TO US WEST COAST. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL'});
});

router.get('/wildfire', function(req, res, next){
  res.render('wildfire', { date_time:'02/04/2017 12:00PM',
  city: 'IRVINE, ORANGE, FULLERTON, ANAHEIM, SANTA ANA, NEWPORT BEACH, COSTA MESA, TUSTIN, HUNTINGTON BEACH, BREA',
   alert_desc: 'WILDFIRE EAST OF FWY 405, NORTH OF HWY ROUTE 55. EVACUATIONS OCCURRING. WATCH NEWS OR CALL 211.'});
});

router.get('/flood', function(req, res, next){
  res.render('flood', { date_time:'02/04/2017 12:00PM',
  city: 'IRVINE, ORANGE, FULLERTON, ANAHEIM, SANTA ANA, NEWPORT BEACH, COSTA MESA, TUSTIN, HUNTINGTON BEACH, BREA',
   alert_desc: 'EXTREME SEVERE FLASH FLOOD IN ORANGE COUNTY. EVACUATIONS OCCURRING. WATCH NEWS OR CALL 211.'});
});

router.get('/missile', function(req, res, next){
  res.render('missile', { date_time:'02/04/2017 12:00PM',
  city: 'IRVINE, ORANGE, FULLERTON, ANAHEIM, SANTA ANA, NEWPORT BEACH, COSTA MESA, TUSTIN, HUNTINGTON BEACH, BREA',
   alert_desc: 'BALLISTIC MISSILE INBOUND TO ORANGE COUNTY. EVACUATIONS MANDATORY. WATCH NEWS OR CALL 211.'});
});


router.get('/:disaster', function(req, res, next) {
  res.render(req.params.disaster);
});

module.exports = router;
