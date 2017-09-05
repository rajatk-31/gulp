var gulp 	= require('gulp');
var copycat 	= require('gulp-copycat');
var concat      = require('gulp-concat');
 
var sourceRegexBegin: /\/\*--\s*ccs:\s*(\S+)\s*--\*\//gi
var sourceRegexEnd:   /\/\*--\s*\/ccs:\s*(\S+)\s*--\*\//gi
 
var options = {
 tags: {
    source: [
    {
        begin: sourceRegexBegin, // beginning of source tag: /*-- ccs:name --*/ 
        end:   sourceRegexEnd	 // end of source tag: /*-- /ccs:name --*/ 
    }
    ]
 }
 
gulp.task('default', function() {
    return gulp.src(['constants.js', 'destination.html'])
            .pipe(copycat(options))
            .pipe(concat('index.html'))
            .pipe(gulp.dest('/build/'))
});

