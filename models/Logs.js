const connection = require('./DB').connection;

const Logs = {};

Logs.create = (log, callback) => {
    connection.query('INSERT INTO logs SET ?', log, (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};

Logs.findAll = (callback) => {
    connection.query('SELECT * FROM logs', (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        if (results.length === 0) {
            return callback(null, null);
        }
        const logs = results;
        callback(null, logs);
    });
};

module.exports = Logs;