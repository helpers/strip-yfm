## delimiters
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