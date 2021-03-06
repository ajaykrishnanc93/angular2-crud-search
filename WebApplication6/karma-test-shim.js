﻿// http://stackoverflow.com/questions/36035820/karma-testing-with-angular2-unexpected-anonymous-system-register-call
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () { };

System.config({
    packages: {
        'base/app': {
            defaultExtension: 'js',
            format: 'register',
            map: Object.keys(window.__karma__.files).filter(onlyAppFiles).reduce(createPathRecords, {})
        }
    }
});

System.import('angular2/src/platform/browser/browser_adapter')
    .then(function (browser_adapter) { browser_adapter.BrowserDomAdapter.makeCurrent(); })
    .then(function () { return Promise.all(resolveTestFiles()); })
    .then(function () { __karma__.start(); }, function (error) { __karma__.error(error.stack || error); });

function createPathRecords(pathsMapping, appPath) {
    var moduleName = './' + resolveKeyPathForMapping('base/app/', appPath);
    moduleName = moduleName.replace(/\.js$/, '');
    pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
    return pathsMapping;
}

function onlyAppFiles(filePath) {
    return /\/base\/app\/(?!.*\.spec\.js$).*\.js$/.test(filePath);
}

function onlySpecFiles(path) {
    return /\.spec\.js$/.test(path);
}

function resolveTestFiles() {
    return Object.keys(window.__karma__.files)  // All files served by Karma.
        .filter(onlySpecFiles)
        .map(function (moduleName) {
            return System.import(moduleName);
        });
}

function resolveKeyPathForMapping(basePathWhereToStart, appPath) {
    var location = appPath.indexOf(basePathWhereToStart);
    if (location > -1) {
        return appPath.substring(basePathWhereToStart.length + 1);
    } else {
        return appPath;
    }
}