const bcrypt = require('bcrypt');
const saltRounds = 10;
const UserRepository = require('../infra/repositories/User');

async function get(){
    return await UserRepository.get();
}

async function insert(email, password){
    try {
        let hashedPassword = await bcrypt.hash(password, saltRounds);
        return await UserRepository.insert(email, hashedPassword);
    } catch(error) {
        throw(error);
    }
}

async function login(email, password){
    let queryResponse = await UserRepository.login(email);
    let storedPassword =  queryResponse.rows[0]["user_password"];
    try {
        let rightPassword = await bcrypt.compare(password, storedPassword);
        if(rightPassword){
            //authentication
        }else {
            throw("Not allowed");
        }
    } catch (error) {
        throw(error);
    }
}

const UserBll = {
    get,
    insert,
    login
}

module.exports = UserBll;