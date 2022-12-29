import axios from "axios";

const HTTP = axios.create({ baseURL: process.env.REACT_APP_API_ENDPOINT });

HTTP.interceptors.request.use(
    config => {
        const user = localStorage.getItem("user");

        if (config.headers && user) {
            const token: string = JSON.parse(user).token;
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    async error => await Promise.reject(error)
);

HTTP.interceptors.response.use(
    response => response,
    async error => {

        if (error.response.status === 401) {
            // TODO Redirect to "/login"
        }

        return await Promise.reject(error);
    }
);

export default HTTP;
