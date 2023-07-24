import jwt from 'jsonwebtoken';

// Middleware untuk verifikasi token JWT
export const authMiddleware = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(401).json({ error: 'Token tidak ditemukan' });
        }
        
        const token = authorizationHeader.split(' ')[1]; // Ekstrak token dari header Authorization
        const decoded = jwt.verify(token, config.jwtSecretKey); // Verifikasi token menggunakan secret key

        // Menyimpan token yang telah terdekripsi ke dalam objek permintaan (request object)
        req.user = decoded.user;

        next(); // Melanjutkan ke middleware selanjutnya
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Token tidak valid' });
    }
};

// Export fungsi authMiddleware
export default authMiddleware;
