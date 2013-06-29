var util = require('util'),
  colors = require('colors'),
  _ = require('underscore');

var logDefaults = {
  showHidden: false,
  depth: null,
  colors: true,
  debug: true
};
var prettyPrint = function (obj, options) {
  options = options || {};
  _.defaults(options, logDefaults);
  if (!options.debug) return;
  console.log(util.inspect(obj, options));
};

var logWithColor = function(msg, color) {
  // We instantiate a string in case null or undefined was passed in.
  console.log(String(msg)[color]);
};

var warn = function(msg) {
  logWithColor(msg, 'yellow');
};
var error = function(msg) {
  logWithColor(msg, 'red');
};
var success = function(msg) {
  logWithColor(msg, 'green');
};
var info = function(msg) {
  logWithColor(msg, 'cyan');
};

module.exports.prettyPrint = prettyPrint;
module.exports.pp = prettyPrint; //alias
module.exports.error = error;
module.exports.success = success;
module.exports.info = info;
module.exports.warn = warn;