var express = require('express');
var app = express();
app.get('/', function(req, res, next) {
    res.redirect('http://weibo.com/u/2720114643');
});

app.listen(80, function(req, res) {
    console.log('app is running at port 80');
});