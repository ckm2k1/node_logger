# Node Logger - Making debugging in the console a tiny bit easier.


## Installation

    npm install node_logger

## Usage

``` js
var logger = require('node_logger');

var obj = {
  'prop1': 'value',
  'prop2': [1,2,3,4],
  'prop3': function() { console.log('test') }
}

//All of the following will print a nicely formatted JSON or Javascript object. Useful
//as replacement for util.inspect() or console.log().
logger.log(obj);
logger.prettyPrint(obj);
logger.pp(obj);


//These will print regular string messages with colors.
var msg = 'A log line';

logger.success(msg); //green
logger.error(msg); //red
logger.warn(msg); //yellow
logger.info(msg); //cyan
```

##Config

You can call logger.configure() with a settings object or key, value pair
to change logger options.

Usage:

``` js
logger.configure({ showTimestamp: true}); //or
logger.configure('showTimestamp', true);
```

Options:
timestampShow: true|false // default: true. Will display a timestamp next to messages.
timestampFormat: string // default: 'MMM DD YYYY, HH:mm:ss'. Any format string that moment.js can process.


Author
####  Stanislav Venzerul @ckm2k1