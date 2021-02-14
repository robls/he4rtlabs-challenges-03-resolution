const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization)
        return res.status(401).send();

    let token = authorization.split(' ')[1];

    try {
        jwt.verify(token, process.env.SECRET, (error, user_email) => {
            if(error)
                return res.status(401).send();
            req.user_email = user_email;
            next();
        });
    } catch (error) {
        return res.status(401).send();
    }

}

module.exports = authentication;