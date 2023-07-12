import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Mengatur nilai username saat perubahan pada input
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Mengatur nilai password saat perubahan pada input
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Meng-handle proses login
    const handleLogin = () => {
        if (!username || !password) {
            setError("Username and password are required"); // Menampilkan pesan error jika username atau password kosong
            return;
        }

        axios
            .post("http://localhost:5000/login", {
                username: username,
                password: password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token); // Menyimpan token yang diterima dari server ke dalam local storage
                alert("Login successful"); // Menampilkan notifikasi login berhasil
                window.location.reload(); // Memuat ulang halaman setelah login berhasil
            })
            .catch((error) => {
                setError("Login failed. Please check your username and password."); // Menampilkan pesan error jika login gagal
                console.error(error);
            });
    };

    return (
        <div className="coverlogin">
            <h2>Login</h2>
            {error && <Alert variant="danger">{error}</Alert>} 

            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>

                <div className="mt-3">
                    Belum punya akun? <Link to="/register">Daftar di sini</Link>
                </div>
            </Form>
        </div>
    );
}

export default LoginPage;
