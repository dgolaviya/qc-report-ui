import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8030/api'
});

export default instance;
