var express = require("express");
var app = express();
var languages = require("./language-routes.js");
app.use(express.static(__dirname + "/public"));

app.use("/", languages);

var server = app.listen(8080, function() {
    var port = server.address().port;
    console.log("Server is up and running");
});