import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nimbus.somar.io/'
})

export default api;

