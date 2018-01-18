var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');
var path = require('path');

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
    model.content = JSON.parse(fs.readFileSync(__dirname + "/../data/4685382.json"))
    res.render('homePage', model)
});

module.exports = router;