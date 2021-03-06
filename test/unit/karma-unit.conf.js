module.exports = function(config) {
    config.set({
        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // bower:
            '../../public/components/jquery/dist/jquery.js',
            '../../public/components/angular/angular.js',
            '../../public/components/bootstrap/dist/js/bootstrap.js',
            '../../public/components/angular-ui-router/release/angular-ui-router.js',
            '../../public/components/angular-resource/angular-resource.js',
            '../../public/components/angular-animate/angular-animate.js',
            '../../public/components/angularjs-toaster/toaster.js',
            '../../public/components/angular-loading-bar/build/loading-bar.js',
            '../../public/components/ngUpload/ng-upload.js',
            '../../public/components/angular-mocks/angular-mocks.js',
            '../../public/components/angular-bootstrap/ui-bootstrap-tpls.js',
            // endbower
            '../../public/js/**/*.js',
            '../../public/lib/**/*.js',

            'mock-data.js',
            '*.spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        preprocessors: {
            '../../public/js/**/*.js': ['coverage']
        },

        coverageReporter: {
            dir: '../../test_out/coverage_unit/',
            reporters: [
                {type: 'html'},
                {type: 'json'}
            ]
        },

        plugins:[
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
