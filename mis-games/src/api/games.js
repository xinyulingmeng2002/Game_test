import axios from 'axios';

const API_BASE =
    import.meta.env.DEV ?
    'http://localhost:3000' :
    'https://api.misgames.site';

let cache = new Map();

export const getGames = async(params = {}) => {
    const cacheKey = JSON.stringify(params);
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    try {
        const res = await axios.get(`${API_BASE}/games`, { params });
        cache.set(cacheKey, res);
        return res;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const getGameDetails = async(id) => {
    try {
        return await axios.get(`${API_BASE}/games/${id}`);
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};