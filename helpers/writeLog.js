const Logs = require('../models/logs');

const writeLog = (message, createBy) => {
    const log = {
        message: message,
        create_by: createBy,
        create_date: new Date()
    };
    Logs.create(log, (error, results) => {
        if (error) {
            console.log(error);
        }
    });
}

module.exports = { writeLog };
