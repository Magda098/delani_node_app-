let server = require('./server');
let router = require('./router');
//mapping different URLs to the respective functions in our request handler module as key-value pairs
//define handle object,pass it to the server as an additional parameter. 
let requestHandlers = require("./requestHandler");

let handle = {};
handle["/"] = requestHandlers.index;
handle["/index.html"] = requestHandlers.index;
handle["/portfolio.html"] = requestHandlers.portfolio;

server.start(router.route, handle);

server.start(router.route)