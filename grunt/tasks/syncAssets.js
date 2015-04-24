module.exports = function (grunt) {
  grunt.registerTask(
    'syncAssets', 
    [
      'newer:concat',
      'newer:uglify:server',
      'compass:dev',
      'sync:dist',
      'delete_sync:dist'
    ]
  );
};
