'use strict';

var express = require('express');
var app = express();

var port = 3001;
 
app.listen(port, function() {
    console.log("Express server listening on port " + port);
});

require('./routes')(app);