import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook for routing
import apiClient from '../services/api'; // Your Axios instance

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook to navigate to other pages after login

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        try {
            // Send login request
            const response = await apiClient.post('/auth/login', { email, password });
            console.log('Login successful:', response.data);

            // Store token in localStorage
            localStorage.setItem('token', response.data.token);

            // Redirect to home page after successful login
            navigate('/home');
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="button-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <p className="signup-link">
                    Don't have an account? <a href="/register">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;