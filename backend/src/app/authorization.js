const jwt = require('jsonwebtoken');

const authorization = (user_email) => {
    const token = jwt.sign({ user_email }, process.env.SECRET, {
        expiresIn: 300
    });
    return token;
}

module.exports = authorization;