var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var device = require('express-device');
var fs = require('fs');

var app = express();
var router = require('./expressRouter/router'); 

app.set('view engine', 'vash');
app.set('view options', { layout: false });
app.set('views', __dirname + '/views');

app.use(bodyParser());

// Decode the request url and redirect to default page if the request url is '/首页/首页.html/'
app.use(function (req,res,next) {
    if (req.url === '/index.html/') {
        res.redirect('/')
    }
    console.log("/" + req.method);
    console.log(req.url);
    next();
});

app.use(device.capture());
//app.use(express.static(path.join(__dirname, 'src/about')));
app.use(express.static(path.join(__dirname, 'src')));
app.use("/",router);

app.listen(3000,function(){
    console.log("Live at Port 3000");
});
