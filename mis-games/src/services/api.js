import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export function fetchGames(page = 1, limit = 10) {
    return axios.get(`${API_BASE_URL}/games?page=${page}&limit=10`);
}