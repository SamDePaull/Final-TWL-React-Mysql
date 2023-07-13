import jwt from 'jsonwebtoken';
import config from '../config/config.cjs';

// Middleware untuk verifikasi token JWT
export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Extract token from the Authorization header
        const decoded = jwt.verify(token, config.jwtSecretKey); // Verify the token using the secret key

        // Attach the decoded token to the request object
        req.user = decoded.user;

        next(); // Move to the next middleware
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Invalid token' });
    }
};


// export default { authMiddleware };
