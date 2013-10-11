/*
 * strip-yfm
 * https://github.com/jonschlinkert/strip-yfm
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/*.js'],
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        node: true
      },
      all: {
        src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-readme');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Tests to be run.
  grunt.registerTask('test', ['jshint', 'nodeunit']);

  // Default task.
  grunt.registerTask('default', ['test', 'readme']);

};