<template>
    <div class="game-detail">
      <div v-if="loading">加载中...</div>
      <div v-else-if="game">
        <h1>{{ game.title }}</h1>
        <img :src="game.image" :alt="game.title" />
        <p>{{ game.description }}</p>
        <a :href="game.url" class="play-button" target="_blank">开始游戏</a>
      </div>
      <div v-else>游戏未找到</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  const route = useRoute();
  const game = ref(null);
  const loading = ref(true);
  
  const fetchGameDetail = async () => {
    try {
      const { id } = route.params;
      const { data } = await axios.get(`http://localhost:5000/api/games/${id}`);
      game.value = data;
    } catch (error) {
      console.error("加载失败:", error);
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchGameDetail();
  });
  </script>
  
  <style scoped>
  .game-detail {
    text-align: center;
    padding: 20px;
  }
  .game-detail img {
    width: 60%;
    max-width: 400px;
    border-radius: 15px;
    margin: 20px 0;
  }
  .play-button {
    display: inline-block;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
  }
  </style>