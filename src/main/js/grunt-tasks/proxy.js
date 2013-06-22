'use strict';

module.exports = function (grunt) {

  var httpProxy = require('http-proxy/lib/node-http-proxy');

  grunt.registerTask('proxy', 'HTTP Proxy', function () {

    // fail if a required config is missing
    this.requiresConfig('proxy.options.port');
    this.requiresConfig('proxy.options.backend.port');
    this.requiresConfig('proxy.options.backend.url');
    this.requiresConfig('connect.options.port');

    // read the config
    var port = grunt.config.get('proxy.options.port');
    var backendPort = grunt.config.get('proxy.options.backend.port');
    var backendUrl = grunt.config.get('proxy.options.backend.url');
    var connectPort = grunt.config.get('connect.options.port');

    // configure the router
    var backendPath = 'localhost/' + backendUrl;
    var router = {};
    router[backendPath] = '127.0.0.1:' + backendPort + '/' + backendUrl;
    router['localhost/'] = '127.0.0.1:' + connectPort;

    // start the proxy
    var proxyServer = httpProxy.createServer({
      router: router
    });
    proxyServer.listen(port);

    grunt.log.writeln('proxy server started on port ' + port);
  });
};
