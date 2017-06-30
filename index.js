var express = require('express');
var app = express();
app.get('/', function(req, res, next) {
    res.send('汪凯 is sb');
});

app.listen(8089, function(req, res) {
    console.log('app is running at port 8089');
});