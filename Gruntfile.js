'use strict';

module.exports = function(grunt) {
 
  // Project configuration.
    grunt.initConfig({
    // This line makes your node configurations available for use
	pkg: grunt.file.readJSON('package.json'),
    // This is where we configure JSHint
	jshint: {
	    options: {
                jshintrc: '.jshintrc',
                browser: true,
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'js/**/*.js',
            ]
	},
	watch: {
            js: {
                files: [
                    'js/**/*.js',
		],
                tasks: ['jshint']
            }
	}
    });
    // Each plugin must be loaded following this pattern
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint', 'watch']);
};