"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    // web_end_point: "http://13.233.59.108",
    web_end_point: "http://27.34.250.93",
    api_end_point: "http://27.34.250.93",
    mongo: {
        database_name: "MBData",
        host: "172.26.6.188",
        port: "20019",
        username: "MBUser",
        password: "aURgUU7sQLcQGk"
    },
    logs: {
        path: _path2.default.join(__dirname, '../logs'),
        file_name: 'development.ServiceApp.logs'
    },
    sms: {
        endpoint: 'http://api.smscountry.com/SMSCwebservice_bulk.aspx?User=Maxbrands&passwd=78405649&',
        report: 'http://api.smscountry.com/smscwebservices_bulk_reports.aspx?user=Maxbrands&passwd=78405649&'
    },
    firbase: {
        "type": "service_account",
        "project_id": "maxbrand-8f2f9",
        "private_key_id": "efe6ba6aa6dacef4544c0c64f6573e577478f14f",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCYf84v445f1oEb\ncATRLWWFz7pUvM7IcjmCNzLfT9s6QiSQj1yuuHiMiexLcTYjMIzrOKXdz4j2cqvV\nirBckp4b06LhBRtDbDWkR+n5pd4K0agulUst963TdHYC5PnRhQMqpbHISfF22Tid\nXA9Gigy5/XaOvpLKYH3UuPirCHY4YSs7zsS2M/vHUuQWUWQ15KxTxGPvoR53ABnS\nNZnAFl94zbYOsatdN1yBzWsJvFDZBzK7ZMgGqlskbCkWvXZI7y4BQd+u3UZnqLP8\nCmKxwjCpokjGatLcW1c6AJmAlkKEJtexeRK1sutP1oU3bUGw5ilTOreBXh7mBjQh\nwZCvSZ4DAgMBAAECggEABla41ze+6SmAe1Rhw61LfRwZ01mq9LaYWlr5Nw9AMXQI\n+UAXd6Tv6dOP0I3EbmkFt0wTy09lkrmu5JtO4lvImg2z3v7FCwpNhOZL8CMRwpX2\n+imD38WRFZ5Pi3MOFhEda3sXE5hM1gZVOprWTbXOR2rYMAdbqnE67PBbvoXSOClz\nyMCR7v0RDr+1Mnxs7CZ1Xx92dNEqnYhkybkhxFXjrsS4mOPUwLEhk+GtA/q4EnDg\nmhcsAydHO6qNf2TzTcVOLsJ12JVcL5MTBiu5L1XGh2EvcGrBHGi70tVlRtk8RWN5\nAobpG4UbOXBskSSzl5Mu0yIffqP2wFUDoJH0qeAWwQKBgQDJzJHeLNRM6Kx9E2CH\n/66LOxWHt8BY5UwB+3UPlvbEPDk17PWMAkASfHgV7lhJcvr7NqugJIlRwacYM4+E\nYQ9GLMoV6K+4faFQr3kppQB9ZP88mbLjGTJAV+o1R/ZrT3HAseiSY1XoJLiU+AS7\nKebHkOdPM6mDJhUolM+rECkDwQKBgQDBdXHR2zx5r/ATQrrJHj1t3f3nx3sHwasA\n8dpYr3KMQsXShP1Y4qGYZUcdOUMwWQScNRTBAWLn3ENmuuWXzxoIu/bfEwpTXSc3\nukLQPggvhwLFDa3I10bNMLS7DQS0B0Z4iTf0Lo6jDg4VilkEIOK4HxqT2JZNSiLz\nP/YdAhRCwwKBgFji3cFyF5VEy21QUq20xmoXfVVJb9T4MvGQlDBou4sWR9Dj7ghc\nmWJLJw3p7UN0/O4YV6JzVXUIipRTabzSj8rGQcFCu9vUonCKyiC4yC1zhiVoQe5c\nE9FZqBUN/JGp7Z4F/z4zuQxG2HLtiA/01e1De09cnybgaGN2oL5loNtBAoGAAWAm\naQmYCn13xYtJ7LgsU6WqcoV2mH2GC8GsfcjxlZG7+l07t/AUmhLOSKTpl2Rqpfmy\nphSucVudlxNpIoU0eC9t9/QYtLMK3liStQxb3oqlOGV6gN0XAcqA3nufNvB+Tckb\n/r5+ASbObtTHAUKCmjCObdKybuZCDVy9EUO8hSUCgYBDf1zrvSpEF2YSF+6lg22n\nPS1st6Yl+JjbkGmfKhFWbUzV0p0ucW8+fR2HV0en2qhvsRlEfgvhtYyywIy99718\ngMeNodFrYr7rKeB3GOARfN6bkqpHXoRiHODzrWAJ2lrbAVKxVvM5LONnsItmj675\nqpQxng0xlWsI+ajMfUTFpA==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-9rt41@maxbrand-8f2f9.iam.gserviceaccount.com",
        "client_id": "109280249247689308506",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9rt41%40maxbrand-8f2f9.iam.gserviceaccount.com"
    },
    s_key: "q2W#e$r%t^Y&ui*op",
    drive: { "installed": { "client_id": "19206249914-bt3la5bi0c12i5gn9lmkqv14ktni8p2b.apps.googleusercontent.com", "project_id": "maxbrand-1576058251802", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_secret": "DAlBEPgL1XYP38dfU93wMaGH", "redirect_uris": ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"] } },
    driveBackupFileLocation: '1wHi-dnaFh83B1LiPN77jo11MjtjzNzzb',
    media: {
        local_file_path: "/home/max_brand/",
        s3_file_path: "",
        use_S3: "false"
    },
    AWS: {
        accessKeyId: "ACCESS_KEY",
        secretAccessKey: "SECRET_KEY",
        s3: {
            region: "us-east-2",
            Bucket: "",
            endpoint: "http://s3-us-east-2.amazonaws.com/"
        }
    }
};

exports.default = config;