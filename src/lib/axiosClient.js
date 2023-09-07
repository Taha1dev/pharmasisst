// Import the necessary modules and dependencies
import axios from 'axios';

// Create an Axios instance
const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// Function to remove the token from local storage
export const logout = () => {
  axiosClient.post('/logout');
  localStorage.removeItem('token');
};

// Request interceptor
axiosClient.interceptors.request.use((config) => {
  // Add authentication token to headers if available
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthorized access or expired token
    if (error.response && error.response.status === 401) {
      // Redirect to login or perform logout logic
      logout();
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
