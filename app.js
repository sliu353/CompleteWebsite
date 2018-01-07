var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var device = require('express-device');
var decode = require('urldecode')
var fs = require('fs');

var app = express();
var router = express.Router(); 

app.set('view engine', 'vash');
app.set('view options', { layout: false });
app.set('views', __dirname + '/views');

app.use(bodyParser());

// Decode the request url and redirect to default page if the request url is '/首页/首页.html/'
app.use(function (req,res,next) {
    req.url = decode(req.url);
    if (req.url === '/首页/首页.html/') {
        res.redirect('/')
    }
    console.log("/" + req.method);
    console.log(req.url);
    next();
});

app.use(device.capture());
app.use(express.static(path.join(__dirname, 'public/首页')));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/",router);

router.use(function (req,res,next) {
    req.url = decode(req.url);
    console.log("/" + req.method);
    console.log("/" + req.device.type.toUpperCase());
    next();
});

router.get("/",function(req,res){
    var device_type = req.device.type;
    var model = {};
    model.navbar = JSON.parse(fs.readFileSync(__dirname + "/Resources/navbar.json"));
    model.content = JSON.parse(fs.readFileSync(__dirname + "/Resources/homePage.json"))
    res.render('homePage', model)
});

app.listen(3000,function(){
    console.log("Live at Port 3000");
});
