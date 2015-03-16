module.exports = {
    'unit': [
        'karma'
    ],
    'e2e': [
        'webdrivermanager:update',
        'protractor'
    ],
    'build': [
        'bower:install',
        'wiredep',
        'unit'
    ],
    'serve': [
        'concurrent:serve'
    ],
    'default': [
        'serve'
    ]
}
