import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRegister = () => {
        axios
            .post("http://localhost:5000/register", {
                username: username,
                password: password,
            })
            .then((response) => {
                // Handle registration success
                alert("Registration successful");
                // Redirect to login page
                window.location.assign("/login");
            })
            .catch((error) => {
                // Handle registration failure
                alert("Registration failed");
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
