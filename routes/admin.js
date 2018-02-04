var express = require('express');
var router = express.Router();
const OneSignalClient = require('node-onesignal-api');

// create a new client
const client = new OneSignalClient({
    appId: '1fd418f3-d9a9-44d9-8d06-48febf4a4295',
    restApiKey: 'NmIxY2I1ZWEtODY5ZC00NGIyLWJmMGYtNjQxYTIwYzI3NjJi'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin_dash');
});


router.post('/:type', function(req, res, next) {
  if (req.params.type == 'wildfire') {
    var type = 'Wild Fire';
  }
  if (req.params.type == 'flood') {
    var type = 'Flash Flood';
  }
  if (req.params.type == 'missile') {
    var type = 'Missile Threat';
  }

  // send a notification
  client.createNotification({
    contents: {
      contents: {'en': 'Type: ' + type + ' // click for info'}
    },
    specific: {
      included_segments: ['All']
    },
    attachments: {
      url: `http://defconalerts.tech/${req.params.type}/${req.body.location}`
    }
  }).then(success => {
    console.log('IN SUCCESS');
    res.redirect('/admin');
  });
  res.redirect('/admin');
});

module.exports = router;
