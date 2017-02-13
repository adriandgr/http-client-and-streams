var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function(res) {
  console.log('In response handler callback!');
  console.log('Response: ', res);
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");