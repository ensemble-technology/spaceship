module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {
          dynamic: {                         // Another target
            options: {                       // Target options
              optimizationLevel: 5
          },
            files: [{
              expand: true,                  // Enable dynamic expansion
              cwd: 'src/',                   // Src matches are relative to this path
              src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
              dest: 'dist/img/mobile/'                  // Destination path prefix
            }]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
};
