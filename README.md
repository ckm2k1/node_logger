# Node Logger - Making debugging in the console a tiny bit easier.


## Installation

    npm install node_logger

## Usage

``` js
var logger = require('node_logger');

var obj = {
  'prop1': 'value',
  'prop2': [1,2,3,4]
}

logger.log(obj);

var msg = 'A log line';

logger.success(msg); //green
logger.error(msg); //red
logger.warn(msg); //yellow
logger.info(msg); //cyan
```

Author
####  Stanislav Venzerul @ckm2k1