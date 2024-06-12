import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEPATH,
});

api.interceptors.response.use(undefined, (err) => {
    return Promise.reject(err);
});

export const getTopMetches = async () => api.get('/all/running/match/series/data/');

export default api;