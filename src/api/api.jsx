import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEPATH,
});

api.interceptors.response.use(undefined, (err) => {
    return Promise.reject(err);
});

// ALL GET METHODS
export const getMenus = async () => api.get('/menu/Data/');
export const getTop5Metches = async () => api.get('/today/running/top/match/');
export const getTopMetches = async () => api.get('/all/running/match/series/data/');
export const getTopArticles = async () => api.get('/active-articles/');
export const getTop5stories = async () => api.get('/top5/stories/');
export const getTop5Matches = async () => api.get('/today/running/top/match/');
export const getVideos = async () => api.get('/last5/videos/');

// ALL POST METHODS
export const getMatchData = async ({ match_data_id, series_data_id }) => api.post('match/live/score/', { matchId: match_data_id, seriesId: series_data_id });

export default api;