import axios from 'axios';

const tecnosueApi = axios.create({
    baseURL: '/api'
});

export default tecnosueApi