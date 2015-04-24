module.exports = {
  dist: {
    cwd: '<%= dist %>',
    src: ['**', '!**/*.css', '!**/*.css.map', '!**/*.js'],
    syncWith: '<%= app %>'
  }
};
