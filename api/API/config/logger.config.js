'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _winston = require('winston');

var winston = _interopRequireWildcard(_winston);

var _winstonDailyRotateFile = require('winston-daily-rotate-file');

var winston_rotate = _interopRequireWildcard(_winstonDailyRotateFile);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var config = require('./' + _settings2.default.environment + '.config');

var logs = config.default.logs;
var logDir = logs.path;

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

var logger = new winston.Logger({
    level: 'info',
    transports: [new winston.transports.Console({
        colorize: true
    }), new winston.transports.DailyRotateFile({
        filename: logs.file_name,
        dirname: logs.path,
        mazsize: 1024 * 1024 * 20, //20 MB,
        maxFiles: 25,
        datePattern: '.dd-MM-yyyy'
    })]
});

exports.default = logger;