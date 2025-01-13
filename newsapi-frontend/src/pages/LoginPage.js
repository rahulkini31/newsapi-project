// import React, { useState } from 'react';
// import apiClient from '../services/api'; // Your Axios instance

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         apiClient.post('/auth/login', {
//             email,
//             password
//         })
//         .then(response => {
//             console.log('Login successful:', response.data);
//             // Save the token in localStorage
//             localStorage.setItem('token', response.data.token); // Store the token
//             // Optionally redirect the user to the home page or dashboard
//             window.location.href = '/home'; // Change this to your desired route
//         })
//         .catch(error => {
//             console.error('Login error:', error);
//             // Handle login error (e.g., show an error message)
//         });
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//             />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//             />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// };

// export default LoginPage;

import React, { useState } from 'react';
import apiClient from '../services/api'; // Your Axios instance
import { useNavigate } from 'react-router-dom'; // For navigation in React Router v6

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Using useNavigate hook instead of useHistory

    const handleLogin = () => {
        apiClient.post('/auth/login', {  // Correct the URL here (no /news)
            email,
            password
        })
        .then(response => {
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token); // Save the token in localStorage
            navigate('/home'); // Redirect to home page after successful login
        })
        .catch(error => {
            console.error('Login error:', error);
            setError('Invalid email or password.'); // Show error message if login fails
        });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h3 className="text-center mb-4">Login</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary btn-block mt-4"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <div className="text-center mt-3">
                    <a href="/register">Don't have an account? Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;