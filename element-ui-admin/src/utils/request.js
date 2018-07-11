import axios from 'axios';

const s = axios.create({
    baseURL: 'http://api-dev',
    timeout: 5000,
    // params: query,
})

export default s;