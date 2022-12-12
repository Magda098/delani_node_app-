//code for our http server
//import the http module that is shipped together with Node.js when we install it and makes it accessible through the variable http
let http = require('http');//


http.createServer(function(request, response){
 response.writeHead(200, {"Content-type": "text/plain"});
 response.write("Hello World");
 response.end();
}).listen(8000);