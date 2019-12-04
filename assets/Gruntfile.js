module.exports = function (grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),


      // Concatenate Configuration
      concat: {
         options: {
            separator: ';'
         },
         script: {
            src: [
               'dist/js/script.js'
            ],
            dest: '../markup/js/script.min.js'
         }
      },


      // Uglify Configuration
      uglify: {
         dist: {
            files: {
               '../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
               '../markup/js/swiper.min.js': ['dist/js/plugin/swiper.js'],
               '../markup/js/slick.min.js': ['dist/js/plugin/slick.min.js'],
               '../markup/js/jcf.scrollable.min.js': ['dist/js/plugin/jcf.scrollable.js'],
               '../markup/js/jcf.select.min.js': ['dist/js/plugin/jcf.select.js'],
               '../markup/js/jcf.file.min.js': ['dist/js/plugin/jcf.file.js'],
               '../markup/js/jcf.checkbox.min.js': ['dist/js/plugin/jcf.checkbox.js'],
               '../markup/js/jcf.radio.min.js': ['dist/js/plugin/jcf.radio.js'],
               '../markup/js/jcf.min.js': ['dist/js/plugin/jcf.js'],
               '../markup/js/jquery.validate.min.js': ['dist/js/plugin/jquery.validate.min.js'],
               // '../markup/js/daygrid/main.min.js': ['dist/js/plugin/daygrid/main.js'],
               // '../markup/js/core/main.min.js': ['dist/js/plugin/core/main.js'],
               '../markup/js/datepicker.min.js': ['dist/js/plugin/datepicker.min.js'],
               '../markup/js/jquery.fancybox.min.js': ['dist/js/plugin/jquery.fancybox.min.js'],
               '../markup/js/script.min.js': ['dist/js/script.js'],
               '../markup/js/home.min.js': ['dist/js/home.js'],
               '../markup/js/about-edition.min.js': ['dist/js/about-edition.js'],
               '../markup/js/trekking.min.js': ['dist/js/trekking.js'],
               '../markup/js/search-hike.min.js': ['dist/js/search-hike.js'],
               '../markup/js/article-post.min.js': ['dist/js/article-post.js'],
               '../markup/js/inspiration.min.js': ['dist/js/inspiration.js'],
               '../markup/js/advice.min.js': ['dist/js/advice.js'],
               '../markup/js/selected-hike.min.js': ['dist/js/selected-hike.js'],
               '../markup/js/subscription.min.js': ['dist/js/subscription.js'],
               '../markup/js/personal-area.min.js': ['dist/js/personal-area.js'],
               '../markup/js/developments.min.js': ['dist/js/developments.js']
            }
         }
      },

      // Sass Configuration
      sass: {
         options: {
            loadPath: ['bower_components/foundation/foundation.scss']
         },
         dist: {
            options: {
               sourcemap: 'none',
               style: 'compressed'
            },
            files: [{
               expand: true,
               cwd: 'dist/scss/',
               src: ['*.scss'],
               dest: '../markup/css/',
               ext: '.css'
            }]
         }
      },

      // Watch Configuration
      watch: {
         grunt: {files: ['Gruntfile.js'], tasks: ['default']},

         sass: {
            files: 'dist/scss/**/*.scss',
            tasks: ['buildCss']
         },

         script: {
            files: 'dist/js/*.js',
            tasks: ['buildJs']
         },

         markup: {
            files: '**/*.html',
            tasks: ['htmlbuild']
         }
      },

      fixturesPath: './',
      sourcesPath: '../markup',

      htmlbuild: {
         dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
               beautify: true,
               prefix: '../',
               relative: false,
               sections: {
                  views: '<%= fixturesPath %>/*.html',
                  templates: '<%= fixturesPath %>/*.html',
                  layout: {
                     header: '<%= fixturesPath %>/templates/header.html',
                     footer: '<%= fixturesPath %>/templates/footer.html',
                     comment: '<%= fixturesPath %>/templates/comment.html'
                  }
               },
            }
         }
      }


   });

// Load Grunt tasks
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-html-build');


// Register Grunt tasks
   grunt.registerTask('buildCss', ['sass']);
   grunt.registerTask('buildJs', ['concat', 'uglify']);
   grunt.registerTask('default', ['buildCss', 'buildJs', 'htmlbuild', 'watch', 'sass']);


};
