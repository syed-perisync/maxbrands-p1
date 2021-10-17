'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

var _logger = require('../config/logger.config');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('./' + _settings2.default.environment + '.config');

_mongoose2.default.Promise = global.Promise;

var connectToMongoDb = async function connectToMongoDb() {
    var host = config.default.mongo.host;
    var port = config.default.mongo.port;
    var username = config.default.mongo.username;
    var password = config.default.mongo.password;
    var database_name = config.default.mongo.database_name;
    var connectionString = "";
    // console.log(host);
    // console.log(port);
    // console.log(database_name);
    // console.log(username);
    // console.log(password);

    if (_settings2.default.environment === "local") connectionString = 'mongodb://' + host + ':' + port + '/' + database_name;else if (_settings2.default.environment === "production") connectionString = 'mongodb://' + username + ':' + password + '@' + host + ':' + port + '/' + database_name + '?authSource=' + database_name;else connectionString = 'mongodb://' + username + ':' + password + '@' + host + ':' + port + '/' + database_name;

    try {
        await _mongoose2.default.connect(connectionString, {
            useMongoClient: true
        });
        console.log(connectionString);

        _logger2.default.info('MongoDB Connected Successfully..');
    } catch (error) {
        _logger2.default.error('Error Connecting to MongoDB');
    }
};

exports.default = connectToMongoDb;