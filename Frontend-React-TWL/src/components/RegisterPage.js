import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Mengatur nilai username saat perubahan pada input
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Mengatur nilai password saat perubahan pada input
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Meng-handle proses registrasi
    const handleRegister = () => {
        axios
            .post("http://localhost:5000/register", {
                username: username,
                password: password,
            })
            .then((response) => {
                // Menangani registrasi sukses
                alert("Registration successful"); // Menampilkan notifikasi registrasi berhasil
                // Redirect ke halaman login
                window.location.assign("/login");
            })
            .catch((error) => {
                // Menangani registrasi gagal
                alert("Registration failed"); // Menampilkan notifikasi registrasi gagal
                console.error(error);
            });
    };

    return (
        <div className="coverlogin">
            <h2>Register</h2>
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

                <Button variant="primary" onClick={handleRegister}>
                    Register
                </Button>

                <div>
                    Sudah punya akun? <Link to="/login">Kembali ke halaman login</Link>
                </div>
            </Form>
        </div>
    );
}

export default RegisterPage;
