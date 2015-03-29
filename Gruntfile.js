'use strict';

//require('load-grunt-tasks')(grunt);

module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		// This line makes your node configurations available for use
		pkg: grunt.file.readJSON('package.json'),
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
			},
			css: {
                files: 'styles/*.scss',
                tasks: ['sass'],
                options: {
                  livereload: true,
                },
            },
		},
		sass: {
				options: {
	            // sourceMap: true
	        },
	        dist: {
	            files: {
	                'styles/main.css': 'styles/main.scss'
	            }
	        }

	    }
	});
	//Each plugin must be loaded following this pattern
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	//grunt.registerTask('sass', 'sass');
	grunt.registerTask('default', ['sass', 'jshint', 'watch']);
};