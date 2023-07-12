import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import User from '../models/UserModel.js';

// Middleware untuk verifikasi token JWT
const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecretKey);
        const user = await User.findOne({ where: { id: decoded.id } });

        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Token verification failed' });
    }
};

export default authMiddleware;
