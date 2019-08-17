import axios from 'axios';

const host = 'https://tindev-leodaiub.herokuapp.com/'

const api = axios.create({
    baseURL: host
})

export default api;