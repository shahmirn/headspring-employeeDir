var express = require('express'),
    path = require('path');
var app = express();

var port = 3001;
 
app.listen(port, function() {
    console.log("Express server listening on port " + port);
});

app.use(express.static(path.join(__dirname, 'public')));
