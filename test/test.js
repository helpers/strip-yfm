/*
 * strip-yfm
 * https://github.com/jonschlinkert/strip-yfm
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var grunt = require('grunt');
var yfm = require('../');

var fixturesdir = path.join.bind(null, 'test', 'fixtures');
var expecteddir = path.join.bind(null, 'test', 'expected');

// Helper for comparing files with whitespace stripped
function shouldBeEqual(actual, expected, fn) {
  if (typeof expected === 'function') {
    fn = expected;
    expected = actual;
  }
  fn(
    String(yfm.strip(grunt.file.read(fixturesdir(expected)))).replace(/\s/g, ''),
    String(grunt.file.read(expecteddir(expected))).replace(/\s/g, '')
  );
}

exports.yfm = {
  basic: function(test) {
    test.expect(1);
    shouldBeEqual('index.md', 'index.md', function(actual, expected) {
      test.equal(actual, expected, 'Should strip YAML front matter from file.');
      test.done();
    });
  }
};

