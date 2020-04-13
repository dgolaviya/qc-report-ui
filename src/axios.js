import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://3.22.132.194:8030/api'
});

export default instance;
