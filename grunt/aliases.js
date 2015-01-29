module.exports = {
    'build': [
        'bower:install',
        'wiredep'
    ],
    'serve': [
        'concurrent:serve'
    ],
    'default': [
        'serve'
    ]
}
