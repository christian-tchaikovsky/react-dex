import axios from "axios";

const HTTP = axios.create({ baseURL: process.env.REACT_APP_API_ENDPOINT });

HTTP.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");

        if (config.headers && token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    async error => await Promise.reject(error)
);

HTTP.interceptors.response.use(
    response => response,
    async error => {

        if (error.response?.status === 401) {
            // Redirect to "/login"
        }

        return await Promise.reject(error);
    }
);

export default HTTP;
