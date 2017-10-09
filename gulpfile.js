/**
 * gulp进行项目的自动化流程控制
 */

var gulp = require('gulp');

// 删除文件插件
var del = require('del');

// 按顺序执行插件
var gulpSequence = require('gulp-sequence');

// 将markdown文件转成html文件插件
var markdown = require('gulp-markdown');

// 重命名插件
var rename = require('gulp-rename');

// gulp入口程序
gulp.task('default', ['sequence'], function() {
    console.log('gulp自动化项目构建成功');
});

// gulp流程控制
gulp.task('sequence', gulpSequence('cleanmd', 'markdown'));

// 删除markdown目录任务
gulp.task('cleanmd', function(cb) {
    del(['./markdown/*.html','./markdown/**/*.html']).then(function() {
        cb()
    });
});

// 将markdown文件转成html文件任务
gulp.task('markdown', function() {
    gulp.src(['./README.md','./src/*.md','./src/**/*.md'])
        .pipe(rename(function(path) {
            if (path.basename.toLowerCase() === 'readme') {
              path.dirname = '.'
              path.basename = 'index';
            }
            if (path.basename.toLowerCase() === 'app') {
              path.dirname = './views/'
                path.basename = 'index';
            }
        }))
    .pipe(markdown())
    .pipe(gulp.dest('markdown'))
});
