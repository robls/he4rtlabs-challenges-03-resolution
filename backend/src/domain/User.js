const UserRepository = require('../infra/repositories/User');

async function get(){
    return await UserRepository.get();
}

async function insert(email, password){
    return await UserRepository.insert(email, password);
}

async function login(email, password){
    let queryResponse = await UserRepository.login(email, password);
    if(queryResponse.rows.length == 0){
        return false;
    }
    return true;
}

const UserBll = {
    get,
    insert,
    login
}

module.exports = UserBll;