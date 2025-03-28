
import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://qebackend.vercel.app/',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to attach the token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
