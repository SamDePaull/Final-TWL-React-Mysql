import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";
import {
    register,
    login
} from "../controllers/UserController.js";

import { authMiddleware 
}  from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Mendapatkan semua produk
router.get('/products',authMiddleware, getProducts);

// Mendapatkan produk berdasarkan ID
router.get('/products/:id',authMiddleware, getProductById);

// Menyimpan produk baru
router.post('/products',authMiddleware, saveProduct);

// Memperbarui produk berdasarkan ID
router.patch('/products/:id',authMiddleware, updateProduct);

// Menghapus produk berdasarkan ID
router.delete('/products/:id',authMiddleware, deleteProduct);

// Registrasi pengguna baru
router.post('/register', register);

// Login pengguna
router.post('/login', login);

export default router;
