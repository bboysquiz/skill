import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.skilla.ru'
});

api.defaults.headers['Authorization'] = 'Bearer testtoken';

export { api }