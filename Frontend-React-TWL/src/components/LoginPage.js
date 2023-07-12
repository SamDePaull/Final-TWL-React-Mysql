import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (!username || !password) {
            setError("Username and password are required");
            return;
        }

        axios
            .post("http://localhost:5000/login", {
                username: username,
                password: password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                alert("Login successful");
                window.location.reload(); // Memuat ulang halaman setelah login berhasil
            })
            .catch((error) => {
                setError("Login failed. Please check your username and password.");
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
