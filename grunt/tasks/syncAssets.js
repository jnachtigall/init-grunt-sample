'use strict';
module.exports = function(grunt) {
  grunt.registerTask(
    'syncAssets',
    [
      'jshint',
      'jscs',
      'concat:js',
      'compass:dev',
      'sync'
    ]
  );
};
