'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var loopbackSSL = require('loopback-ssl');

var app = module.exports = loopback();

// Add Counts Mixin to loopback
require('loopback-counts-mixin')(app);

var app = module.exports = loopback();
 
boot(app, __dirname, function(err) {
  if (err) throw err;
});

return loopbackSSL.startServer(app);