var util = require('util'),
  colors = require('colors'),
  _ = require('underscore'),
  moment = require('moment');

var config = {
  showTimestamp: true
};

var logDefaults = {
  showHidden: false,
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
  var out = msg[color];
  if (config.showTimestamp) {
    out = [moment().format('MMM DD YYYY, HH:mm:ss'), out].join(' - ');
  }
  console.log(out);
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

function configure () {
  var key, value;
  key = _.first(arguments);
  value = _.last(arguments);

  if (!arguments.length) {
    return config;
  }
  if (_.isObject(key)) {
    config = key;
  } else {
    config[key] = value;
  }
}

module.exports.log = log;
module.exports.error = error;
module.exports.success = success;
module.exports.info = info;
module.exports.warn = warn;
module.exports.configure = configure;
