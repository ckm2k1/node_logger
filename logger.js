/*
  Author: Stanislav Venzerul
  License: MIT
  Date: Nov 30th, 2013
 */
var util = require('util'),
  colors = require('colors'),
  _ = require('underscore'),
  moment = require('moment');

var config = {
  timestampShow: true,
  timestampFormat: 'MMM DD YYYY, HH:mm:ss'
};

var ppConfig = {
  showHidden: false,
  depth: null,
  colors: true,
  debug: true
};

var prettyPrint = function (obj, options) {
  options = options || {};
  _.defaults(options, ppConfig);
  if (!options.debug) return;
  console.log(util.inspect(obj, options));
};

var logWithColor = function(msg, color) {
  // We instantiate a string in case null or undefined was passed in.
  if (_.isUndefined(msg) || _.isNull(msg)) msg = String(msg);
  var out = msg[color];
  if (config.timestampShow) {
    out = [moment().format(config.timestampFormat), out].join(' - ');
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

function configure() {
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

module.exports.log = prettyPrint; //alias for backward compat.
module.exports.prettyPrint = prettyPrint;
module.exports.pp = prettyPrint; //alias
module.exports.error = error;
module.exports.success = success;
module.exports.info = info;
module.exports.warn = warn;
module.exports.configure = configure;