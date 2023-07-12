import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

// Mengaktifkan kebijakan lintas sumber (CORS)
app.use(cors());

// Middleware untuk mem-parsing body permintaan dengan format JSON
app.use(express.json());

// Middleware untuk mengelola unggahan file
app.use(FileUpload());

// Middleware untuk menyajikan file statis dari direktori "public"
app.use(express.static("public"));

// Menggunakan router ProductRoute untuk rute-rute terkait produk
app.use(ProductRoute);

// Menjalankan server pada port 5000
app.listen(5000, () => console.log('Server Up and Running...'));
