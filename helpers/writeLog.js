const Logs = require('../models/Logs');

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
