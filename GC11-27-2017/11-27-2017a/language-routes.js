var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res) {
    res.send("This is your baseline endpoint.");
});

routes.get("/javascript", function(req, res) {
    res.send("Javascript is pretty neat");
});

routes.get("/nodejs", function(req, res) {
    res.send("But so is NodeJS");
});

routes.get("/angularjs", function(req, res) {
    res.send("Angular is real fucking cool")
});

module.exports = routes;