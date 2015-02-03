module.exports = {
  app: {
    // Point to the files that should be updated when
    // you run `grunt wiredep`
    src: [
      'public/**/*.html'
    ],
  },
  test: {
    // Based on: https://github.com/stephenplusplus/grunt-wiredep/issues/86
    src: 'public/test/unit/karma-unit.conf.js',
    fileTypes: {
        js: {
            block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {
                js: /'(.*\.js)'/gi
            },
            replace: {
                js: '\'{{filePath}}\','
            }
        }
    }
  }
};
