var http = require("http");
var myInfo = require("./myinfo.js");

console.log(myInfo);


http.createServer(onRequest).listen(8080);

function onRequest(request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("hey");
    response.end();
}