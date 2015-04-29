var gulp = require('gulp'),
		sass = require('gulp-sass'),
		inject = require('gulp-inject')
		nodemon = require('gulp-nodemon');

var paths = {
	scripts: ['src/app.js', 'src/fakeData.js', 'src/app-controller.js', 'src/modules/**/*.js', '!src/modules/**/*.test.js', '!src/modules/**/*.spec.js'],
	html: ['src/**/*.html'],
	unitTests: ['src/modules/**/*.test.js']
}

gulp.task('sass', function(){
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'));
});

gulp.task('inject', function(){
	return gulp.src('src/index.html')
		.pipe(inject(gulp.src(paths.scripts, {read:false}), {ignorePath:'/src/'}))
		.pipe(gulp.dest('src/'));
});	

gulp.task('start', function () {
  nodemon({
    script: 'server/app.server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('dev', ['sass', 'start']);