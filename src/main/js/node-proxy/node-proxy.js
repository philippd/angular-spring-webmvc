var http = require('http'),
    httpProxy = require('http-proxy/lib/node-http-proxy');

var options = {
  router: {
    'localhost/rest': '127.0.0.1:8080/rest',
    'localhost/': '127.0.0.1:9000/'
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(7070);

console.log('http proxy server started on port 7070');
