const query = require('../helpers/queryHelper');
const _getAllUsersQueryString = 'SELECT * FROM USERS';

async function get(){
    return await query(_getAllUsersQueryString);
};

async function insert(email, password){
    let createUserQueryString = `INSERT INTO USERS VALUES (DEFAULT, '${email}', '${password}', CURRENT_TIMESTAMP)`;
    return await query(createUserQueryString);
};

async function login(email){
    let loginQueryString = `SELECT USER_PASSWORD FROM USERS WHERE USER_EMAIL = '${email}'`;
    return await query(loginQueryString);
}

const UserRepository = { get, insert, login };

module.exports = UserRepository;