var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
console.log(path.join(__dirname, "..", "build"))
//app.use(express.static(path.join(__dirname, "..", "build/static")));


//app.use("/styles", express.static(__dirname + '/styles'));

app.use(express.static(path.join(__dirname, "..", "build")));
//app.use(express.static("public"));
/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });

console.log(path.join(__dirname, "../build", "index.html"))
  res.sendFile(path.join(__dirname, "../build/index.html"));

});

module.exports = router;
