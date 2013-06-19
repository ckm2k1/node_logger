var util = require('util'),
  colors = require('colors'),
  _ = require('underscore');

var logDefaults = {
  showHidden: true,
  depth: null,
  colors: true,
  debug: true
};
var log = function (obj, options) {
  options = options || {};
  _.defaults(options, logDefaults);
  if (!options.debug) return;
  console.log(util.inspect(obj, options));
};

var logWithColor = function(msg, color) {
  if (_.isUndefined(msg) || _.isNull(msg)) return;
  console.log(msg[color]);
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

module.exports.log = log;
module.exports.error = error;
module.exports.success = success;
module.exports.warn = warn;