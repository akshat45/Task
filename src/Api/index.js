import axios from "axios";
import { baseUrl } from "../Constants/baseUrl.js";

axios.defaults.withCredentials = true;

const API = axios.create({ baseURL: baseUrl, withcredentials: true });

API.interceptors.request.use((req) => {
    const token = JSON.parse(localStorage.getItem('cookie'))?.token;
    if (token) {
        req.headers.authorization = `Bearer ${token}`;
    }

    return req;
});

// API.interceptors.response.use((res) => {
//     console.log('interceptor', res);
//     return res;
// }, (err) => {
//     return err;
// });

export const signup = (formData) =>
    API.post("/user/signup", formData)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });

export const login = (formData) =>
    API.post("/user/login", formData)
        .then((res) => {

            console.log('function', res);
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });

