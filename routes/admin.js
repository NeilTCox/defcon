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


router.get('/:type', function(req, res, next) {
  console.log('in ' + req.params.type + ' route');
  // send a notification
  client.createNotification({
    contents: {
      contents: {'en': 'Type: ' + req.params.type + ' // click for info'}
    },
    specific: {
      included_segments: ['All']
    },
    attachments: {
      url: 'http://www.google.com'
    }
  }).then(success => {
      console.log('SUCCESS!');
      res.end();
  });
});

module.exports = router;
