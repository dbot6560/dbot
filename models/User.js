const connection = require('./DB').connection;

const Users = {};

Users.findById = (id, callback) => {
  connection.query(`SELECT * FROM users WHERE discord like '%${id}'`, (error, results, fields) => {
    if (error) {
      return callback(error);
    }
    if (results.length === 0) {
      return callback(null, null);
    }
    const user = results[0];
    callback(null, user);
  });
};

Users.findAll = (callback) => {
    connection.query('SELECT * FROM users', (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        if (results.length === 0) {
            return callback(null, null);
        }
        const users = results;
        callback(null, users);
    });
};


module.exports = Users;
