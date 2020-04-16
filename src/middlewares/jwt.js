const jwt = require('jsonwebtoken');

function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
};

function verifyToken(req, res, next) {
    jwt.verify(req.token, process.env.JWT_SECRET_KEY, (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            console.log(data);
            next();
        }
    })
};

module.exports = {ensureToken, verifyToken};