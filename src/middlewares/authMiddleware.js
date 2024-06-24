const basicAuth = require('basic-auth');

const authMiddleware = (req, res, next) => {
    const user = basicAuth(req);
    if (!user || user.name !== 'admin' || user.pass !== process.env.SECRET_KEY) {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send('Unauthorized');
    }
    next();
};

module.exports = authMiddleware;
