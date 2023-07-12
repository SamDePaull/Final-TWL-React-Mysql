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

const router = express.Router();

// Mendapatkan semua produk
router.get('/products', getProducts);

// Mendapatkan produk berdasarkan ID
router.get('/products/:id', getProductById);

// Menyimpan produk baru
router.post('/products', saveProduct);

// Memperbarui produk berdasarkan ID
router.patch('/products/:id', updateProduct);

// Menghapus produk berdasarkan ID
router.delete('/products/:id', deleteProduct);

// Registrasi pengguna baru
router.post('/register', register);

// Login pengguna
router.post('/login', login);

export default router;
