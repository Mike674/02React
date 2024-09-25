const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../controllers/authController'.JWT_SECRET);

function authenticateToken(req, res, next){
    const authheader = req.headers('authorization');
    console.log(authheader);
    const token = authheader && authheader.split(' ')(1);
    if(!token)
        return res.status(403).json({ code: 403, message: 'Error' });

    jwt.verify(token, JWT_SECRET, (err, user) =>{
        if(err){
            switch(err.name) {
                case 'JsonWebTokenError':
                    return res.status(403).json({ code: 403, message: 'Token expirado' });
                case 'TokenExpiredError':
                    return res.status(401).json({ code: 401, message: 'Error'});
                default:
                    return res.status(400).json({ code: 400, message: 'Error'});
            }
        }
    });
}

module.exports = authenticateToken;