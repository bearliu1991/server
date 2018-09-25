var FileStreamRotator = require('file-stream-rotator')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

var logDirectory = path.join('./', 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logDirectory, '%DATE%.log'),
    frequency: 'daily',
    verbose: false
})

// setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))

module.exports = function (app) {
    app.use(morgan('short', { stream: accessLogStream }))
};

