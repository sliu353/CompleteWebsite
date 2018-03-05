var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');
var path = require('path');
const videoPath = path.join( __dirname + '/../src/video');

var navs = require('../data/navbar.json');
var pages = navs.sections;

/// Routes for admin
router.use(function (req,res,next) {
    console.log("/" + req.method);
    console.log("/" + req.device.type.toUpperCase());
    next();
});

router.get('/admin', function(req, res) {
    res.sendFile(path.resolve('admin.html'));
});

router.get('/homePage.json', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../data/homePage.json'));
});

router.post('/uploadVideo', function(req, res) {
    try {
        fs.writeFile(path.join(videoPath, req.body.name), req.body.src.replace('data:video/mp4;base64,', ''), 'base64', function() {
            res.send('succeeded!');
        });
    }
    catch (e) {
        res.sendDate(e);
    }
});

router.post('/updateHomePage', function(req, res) {
    try{
        var homePageJsonPath = path.resolve(__dirname, '../data/homePage.json');
        fs.writeFileSync(homePageJsonPath, JSON.stringify( req.body));
        res.sendFile(homePageJsonPath);
    } catch (e) {
        res.status(500);
        res.send(e);
    }
});

for (i = 0 ; i < pages; i++) {
    router.route(`/admin/${page.id}`).get(function(req, res) {
        var data = require(`../data/${page.id}.json`);
        res.json(data);
    })
}
///

router.get("/",function(req,res){
    var device_type = req.device.type;
    var model = {};
    model.navbar = JSON.parse(fs.readFileSync(__dirname + "/../data/navbar.json"));
    model.content = JSON.parse(fs.readFileSync(__dirname + "/../data/homePage.json"))
    res.render('homePage', model)
});

module.exports = router;