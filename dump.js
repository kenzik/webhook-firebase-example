var config=require('./config.json')
var Firebase=require('firebase');
var util = require('util');

var ref = new Firebase(config.webhook.firebase + '/buckets/' + config.webhook.siteName + '/' + config.webhook.secretKey);

// Dump your data - Same as "Export JSON" 
ref.child('dev').on('value', function(snapshot) {
    console.log(util.inspect(snapshot.val(),{depth: null}));    
});
