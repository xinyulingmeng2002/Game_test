// 引入 axios 库，用于发送 HTTP 请求
import axios from 'axios';

// 根据当前环境（开发环境或生产环境）设置 API 的基础 URL
// 如果是开发环境（import.meta.env.DEV 为 true），使用本地地址
// 如果是生产环境，使用线上的 API 地址
const API_BASE = 'https://admin.towsgames.site/api'; // 修改为正确的API接口地址

// 创建一个 Map 对象用于缓存 API 请求的结果
// Map 可以存储键值对，这里用请求参数作为键，请求结果作为值
let cache = new Map();

/**
 * 获取游戏列表的异步函数
 * @param {Object} params - 请求的参数，默认为空对象
 * @returns {Promise} - 返回一个 Promise，包含请求的响应结果
 */
export const getGames = async(params = {}) => {
    // 将请求参数转换为 JSON 字符串，作为缓存的键
    const cacheKey = JSON.stringify(params);
    console.log(cacheKey);
    // 检查缓存中是否已经存在该请求的结果
    if (cache.has(cacheKey)) {
        // 如果存在，直接从缓存中获取并返回结果
        return cache.get(cacheKey);
    }

    try {
        // 发送 GET 请求到 API 的 /index 端点，并传递请求参数
        const res = await axios.get(`${API_BASE}/index`, { params });
        console.log(res);

        // 将请求结果存入缓存
        cache.set(cacheKey, res);
        console.log(res);

        // 返回请求结果
        return res;
    } catch (error) {
        // 捕获请求过程中可能出现的错误
        console.error('API Error:', error);
        // 抛出错误，让调用者处理
        throw error;
    }
};

/**
 * 获取单个游戏详细信息的异步函数
 * @param {string} id - 游戏的 ID
 * @returns {Promise} - 返回一个 Promise，包含请求的响应结果
 */
export const getGameDetails = async(id) => {
    try {
        const res = await axios.get(`${API_BASE}/getInfo/${id}`);
        console.log(res);
        return res;
    } catch (error) {
        // 捕获请求过程中可能出现的错误
        console.error('API Error:', error);
        // 抛出错误，让调用者处理
        throw error;
    }
};