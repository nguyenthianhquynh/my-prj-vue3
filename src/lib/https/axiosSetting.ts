import axios from "axios";
const baseDomain: string = import.meta.env.VITE_APP_API_URL as string;

const axiosInstance = axios.create({
    baseURL: baseDomain,
    withCredentials: true
});

export default axiosInstance;