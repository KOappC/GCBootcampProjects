var express = require("express");
var app = express();
var pg = require("pg");
var bodyParser = require("body-parser");
var contactRoutes = require("./contact-routes.js");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", contactRoutes);

var server = app.listen(8080, function(req, res) {
    var port = server.address().port;
    console.log("Server is up and running.  Listening on local host port :8080")
});