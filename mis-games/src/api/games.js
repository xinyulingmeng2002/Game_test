import axios from 'axios';

const API_BASE = 'http://localhost:3000'; // 指向本地 JSON Server

export const getGames = async(params) => {
    const { page = 1, limit = 12, category, search } = params;
    return axios.get(`${API_BASE}/games`, {
        params: { page, limit, category, search }
    });
};

export const getGameDetails = async(id) => {
    return axios.get(`${API_BASE}/games/${id}`);
};