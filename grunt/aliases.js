module.exports = {
    'test': [
        'karma'
    ],
    'build': [
        'bower:install',
        'wiredep',
        'test'
    ],
    'serve': [
        'concurrent:serve'
    ],
    'default': [
        'serve'
    ]
}
