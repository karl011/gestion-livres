const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Accès non autorisé' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token invalide' });
    }
}

module.exports = auth;
