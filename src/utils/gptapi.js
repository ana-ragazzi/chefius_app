import axios from 'axios';
import { API_KEY } from '@env';

const api = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
    },
});

export default api;