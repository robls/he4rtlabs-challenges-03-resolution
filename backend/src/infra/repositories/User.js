const query = require('../helpers/queryHelper');
const _getAllUsersQueryString = 'SELECT * FROM USERS';

async function get(){
    return await query(_getAllUsersQueryString);
};

async function insert(email, password){
    let createUserQueryString = `INSERT INTO USERS VALUES (DEFAULT, '${email}', '${password}', CURRENT_TIMESTAMP)`;
    return await query(createUserQueryString);
};

async function login(email, password){
    let loginQueryString = `SELECT USER_EMAIL FROM USERS WHERE USER_EMAIL = '${email}' AND USER_PASSWORD = '${password}'`;
    console.log(loginQueryString);
    return await query(loginQueryString);
}

const UserRepository = { get, insert, login };

module.exports = UserRepository;