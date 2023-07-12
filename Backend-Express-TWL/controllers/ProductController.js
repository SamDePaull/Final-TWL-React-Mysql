import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

export const getProducts = async(req, res) => {
    try {
        const response = await Product.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductById = async(req, res) => {
    try {
        const response = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveProduct = (req, res) => {
    // Validasi apakah ada file yang diunggah
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    // Validasi tipe file yang diunggah
    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    // Validasi ukuran file yang diunggah
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

    // Pindahkan file ke direktori "public/images" dan simpan entri produk baru dalam database
    file.mv(`./public/images/${fileName}`, async(err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Product.create({ name: name, image: fileName, url: url });
            res.status(201).json({ msg: "Product Created Successfully" });
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updateProduct = async(req, res) => {
    // Temukan produk berdasarkan ID yang diberikan dalam parameter
    const product = await Product.findOne({
        where: {
            id: req.params.id
        }
    });
    // Jika produk tidak ditemukan, kirim respons error
    if (!product) return res.status(404).json({ msg: "No Data Found" });

    let fileName = "";
    // Cek apakah ada file yang diunggah, jika tidak, gunakan file lama yang terkait dengan produk
    if (req.files === null) {
        fileName = product.image;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        // Validasi tipe file yang diunggah
        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
        // Validasi ukuran file yang diunggah
        if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

        // Hapus file lama yang terkait dengan produk dan pindahkan file baru ke direktori "public/images"
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    // Perbarui entri produk dalam database
    try {
        await Product.update({ name: name, image: fileName, url: url }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Product Updated Successfully" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = async(req, res) => {
    // Temukan produk berdasarkan ID yang diberikan dalam parameter
    const product = await Product.findOne({
        where: {
            id: req.params.id
        }
    });
    // Jika produk tidak ditemukan, kirim respons error
    if (!product) return res.status(404).json({ msg: "No Data Found" });

    try {
        // Hapus file gambar terkait dengan produk dan hapus entri produk dari database
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Product Deleted Successfully" });
    } catch (error) {
        console.log(error.message);
    }
}
