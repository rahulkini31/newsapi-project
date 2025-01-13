import axios from 'axios';

// Create Axios instance
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/news', // Your backend URL
});

// Add a request interceptor to include the JWT token in the headers
apiClient.interceptors.request.use(
    (config) => {
        // Get token from localStorage
        const token = localStorage.getItem('token');

        // If token exists, add it to the Authorization header
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config; // Return modified config
    },
    (error) => {
        return Promise.reject(error); // Handle request error
    }
);

export default apiClient;