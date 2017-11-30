var express = require("express");
var contactRoutes = express.Router();
var pool = require("./pg-connection-pool.js");

contactRoutes.get("/contacts", function(req, res) {
    pool.query("select * from contacts").then(function(result) {
        res.send(result.rows);
        console.log("GET has completed successfully");
    });
});

contactRoutes.post("/contacts", function(req,res) {
    var data = req.body;
    console.log(data);
    var sql = "insert into contacts(name, phone, email, relation) values($1::text, $2::text, $3::text, $4::text);";
    var values = [data.name, data.phone, data.email, data.relation];
    pool.query(sql, values).then(function() {
        pool.query("select * from contacts").then(function(result) {
            res.send(result.rows);
            console.log("POST has completed successfully");
        });
    });
});

contactRoutes.delete("/contacts/:id", function(req, res) {
    var data = req.params;
    var sql = "delete from contacts where id=$1::int";
    var values = [data.id];
    pool.query(sql, values).then(function() {
        pool.query("select * from contacts").then(function(result) {
            res.send(result.rows);
            console.log("DELETE has completed successfully");
        });
    });
});

contactRoutes.put("/contacts/:id", function(req, res) {
    var data = req.body;
    var id = req.params;
    var sql = "update contacts set name=$2::text, phone=$3::text, email=$4::text, relation=$5::text where id=$1::int";
    var values = [id.id, data.name, data.phone, data.email, data.relation];
    pool.query(sql, values).then(function() {
        pool.query("select * from contacts").then(function(result) {
            res.send(result.rows);
            console.log("PUT has completed successfully");
        });
    });
});


module.exports = contactRoutes;