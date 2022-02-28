import axios from 'axios'
const baseURL = 'http://localhost:8001/api'
export const axiosInstance = axios.create({
    baseURL: baseURL
});