# strip-yfm [![NPM version](https://badge.fury.io/js/strip-yfm.png)](http://badge.fury.io/js/strip-yfm) 

> The best project ever.

## Getting Started
To install the module, run the following in the command line:

```bash
npm i strip-yfm --save
```

Use within your application with the following line of JavaScript:

```js
var yfm = require('strip-yfm');
```


## Options
### delimiters
Type: `Object`
Default: `{start: '---', end: '---'}`

The starting and ending delimiters that are used before and after the YAML front matter. 

For example:

```js
var yfm = require('strip-yfm');
var delimiters = {
  start: '/*---',
  end: '---*/'
};
var file = require('fs').readFileSync('my-file.hbs', 'utf8');

var strippedFile = yfm.strip(file, delimiters);
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][].

## Author

**Jon Schlinkert**

+ [github.com/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)

## Related 

+ [helpers](https://github.com/helpers): some great handlebars helpers that we decided not to include in the [handlebars-helpers](https://github.com/assemble/handlebars-helpers) project, most likely because the code footprint was too big or the helper wasn't generic enough.

## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated on Friday, October 11, 2013._
