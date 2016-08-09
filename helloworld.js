var http = require("http");
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});
    response.write("Hello World! This is helloworld.js!");
	response.write('<head><meta charset="utf-8"/></head>');  
	response.write('<h1></h1>');  
	response.write('<b></b>');
    response.end();
}).listen(3000);
console.log("Server running at http://localhost:3000/");

