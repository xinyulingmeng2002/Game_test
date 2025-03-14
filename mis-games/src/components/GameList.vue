<template>
    <div class="game-list">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
      <button v-if="hasMore" @click="loadMoreGames" class="load-more">加载更多</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import GameCard from './GameCard.vue';
  
  const games = ref([]);
  const page = ref(1);
  const pageSize = 12; // 一次加载12个游戏
  
  // 获取游戏数据
  const loadMoreGames = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/games?page=${page.value}&limit=${pageSize}`);
      games.value.push(...data);
      page.value++;
    } catch (error) {
      console.error("获取游戏数据失败:", error);
    }
  };
  
  // 页面加载时请求数据
  onMounted(() => {
    loadMoreGames();
  });
  </script>
  
  <style scoped>
  .game-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  </style>
  