
var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var api = new ParseServer({
  databaseURI:'mongodb://localhost:27017/eCommerce_app_demo',
  appId: process.env.APP_ID || 'APPLICATION_ID',
  masterKey: process.env.MASTER_KEY || 'MASTER_KEY', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',  // Don't forget to change to https if needed
  liveQuery: {
    classNames: ["products"] // List of classes to support for query subscriptions
  }
});

var app = express();

app.use('/parse', api);

var port = process.env.PORT || 1337;

var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});


// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);