// import gulp from 'gulp';
// import del from 'del';
// import merge from 'gulp-merge-json';
// import fs from 'fs';
// import path from 'path';
// import _ from 'lodash';
// import concat from 'gulp-concat';

const gulp = require('gulp'),
    del = require('del'),
    merge = require('gulp-merge-json'),
    fs = require('fs'),
    concat = require('gulp-concat'),
    path = require('path'),
    _ = require('lodash');

const pathSrc = {
    locales: 'src/locales',
};

const pathDest = {
    locales: 'public/locales/',
};

const pathWatch = {
    locales: 'src/locales/**/*',
};

function getFolders(dir) {
    return fs.readdirSync(dir).filter(function (file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

function prepareFormatContentJson(file, subFolderPath, json) {
    const filename = path.basename(file.path);
    const filenameStrip = filename.replace(path.extname(filename), '');
    if (process.platform === 'win32') {
        subFolderPath = subFolderPath.replace(/\//g, '\\');
    }

    const subPathJson = file.path.split(subFolderPath)[1];
    const splitKey = process.platform === 'win32' ? '\\' : '/';
    const folders = subPathJson.split(splitKey);
    let jsonStr = '';
    _.forEach(folders, function (folder) {
        if (!_.isEmpty(folder)) {
            if (folder.indexOf('.json') !== -1) {
                if (folder.indexOf('default') === -1) {
                    jsonStr += '{' + '"' + filenameStrip + '": ';
                }
                jsonStr += JSON.stringify(json);
            } else {
                jsonStr += '{' + '"' + folder + '": ';
            }
        }
    });

    _.forEach(folders, function (folder) {
        if (!_.isEmpty(folder) && folder.indexOf('default') === -1) {
            jsonStr += '}';
        }
    });
    return JSON.parse(jsonStr);
}

function swallowError(error) {
    console.log(error);
    this.emit('end');
}

// delete locales folder
gulp.task('delLocales', function () {
    return del([pathDest.locales]);
});

/******************* merge file json locales ************************/
gulp.task('mergeJsonLocales', function (done) {
    const folders = getFolders(pathSrc.locales);
    folders.map(function (folder) {
        gulp.src(pathSrc.locales + '/' + folder + '/*.json').pipe(gulp.dest(pathDest.locales + folder));
        const subFolders = getFolders(pathSrc.locales + '/' + folder);
        subFolders.map(function (subFolder) {
            const subFolderPath = pathSrc.locales + '/' + folder + '/' + subFolder;
            const pathJsonFile = path.join(subFolderPath, '/*.json');
            gulp.src(pathJsonFile)
                .pipe(
                    merge({
                        fileName: subFolder + '.json',
                        // edit file json to tree structure
                        edit: (json, file) => {
                            let subFolderPath = pathSrc.locales + '/' + folder + '/' + subFolder;
                            return prepareFormatContentJson(file, subFolderPath, json);
                        },
                    }),
                )
                .on('error', swallowError)
                // concat into subFolder + ".json"
                .pipe(concat(subFolder + '.json'))
                // write to output
                .pipe(gulp.dest(pathDest.locales + '/' + folder));
        });
    });
    done();
});

/******************* watch json when it changed ************************/
gulp.task('watchJson', function () {
    gulp.watch([pathWatch.locales], gulp.series('mergeJsonLocales'));
});

/******************* task build ************************/
gulp.task('build', gulp.series('delLocales', 'mergeJsonLocales'));

/******************* default build ************************/
gulp.task('default', gulp.series('build'));
