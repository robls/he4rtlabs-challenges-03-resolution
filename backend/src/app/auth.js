const auth = (req, res, next) => {
    console.log('authentication');
    res.status(403, 'Unauthorized');
}

module.exports = auth;