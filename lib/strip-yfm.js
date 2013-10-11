/*
 * Strip YAML front matter
 * https://github.com/helpers/strip-yfm
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

/**
 * @param  {String} src   The source file with YFM
 * @param  {Object} delim Change delimiters with delim.start|delim.end
 * @return {String}       Content of the file, sans YFM
 */
exports.strip = function (src, delim) {
  delim = delim || {
    start: '---',
    end: '---'
  };
  var re = new RegExp('^'+ delim.start + '(?:\\s*)?([\\s\\S]*)?\\n?'+ delim.end + '\\s*$\\n?([\\s\\S]*)', 'm');
  return src.replace(re, '$2');
};
