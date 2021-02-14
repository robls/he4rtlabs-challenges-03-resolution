const UserBll = require('../../../domain/User');

const get = async (req,res) => {
    try {
        let users = await UserBll.get();
        res.send(users.rows);
    } catch (error) {
        res.status(501).send({
            "Error": "Couldn't retrieve user(s)"
        })
    }
}

const insert = async (req, res) => {
    let { user_email, user_password } = req.body;
    
    if(!user_email || !user_email)
        return res.status(501).send({"Error": "Couldn't read user's information from the request, try again later"});

    try {
        let newUser = await UserBll.insert(user_email, user_password);
        return res.status(200).send(newUser);
    } catch (error) {
        let errorMessage = '';
        if(error.code == '23505')
            errorMessage += 'E-mail ja cadastrado, por favor insira outro.';
        return res.status(406).send({
            "Error": errorMessage
        });
    }
};

const login = async (req, res) => {
    let { user_email, user_password } = req.body;
    try {
        let response = await UserBll.login(user_email, user_password);
        return res.send(response);
    } catch (error) {
        console.error(error);
    }
};

const UserController = {
        get,
        insert,
        login
    };

module.exports = UserController;