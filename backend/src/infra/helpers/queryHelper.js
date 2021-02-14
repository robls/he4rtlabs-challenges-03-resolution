const { db } = require('../db/database');

function query(queryString) {
    return new Promise((resolve, reject) => {
        db.query(queryString)
        .then(response => {
            return resolve(response);
        })
        .catch(err => reject(err));
    });
}

module.exports = query;