<template>
    <div class="game-detail">
      <div v-if="loading" class="loading-spinner"></div>
      <div v-else-if="game" class="content">
        <h1 class="title">{{ game.title }}</h1>
        <div class="media-container">
          <img :src="game.cover" class="cover" />
          <iframe 
            v-if="game.embedUrl"
            :src="game.embedUrl"
            class="game-iframe"
          ></iframe>
        </div>
        <div class="meta">
          <div class="rating">⭐ {{ game.rating }}</div>
          <div class="players">👥 {{ game.players }} Players</div>
        </div>
        <p class="description">{{ game.description }}</p>
        <a :href="game.url" class="play-button">Play Now</a>
      </div>
      <div v-else class="error">Game not found</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { getGameDetails } from '../api/games';
  
  const route = useRoute();
  const game = ref(null);
  const loading = ref(true);
  
  onMounted(async () => {
    try {
      const res = await getGameDetails(route.params.id);
      game.value = res.data;
    } catch (error) {
      console.error('Error loading game details:', error);
    } finally {
      loading.value = false;
    }
  });
  </script>
  
  <style scoped>
  .game-detail {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px;
  }
  .media-container {
    position: relative;
    margin: 20px 0;
  }
  .cover {
    width: 100%;
    max-width: 800px;
    border-radius: 12px;
    display: block;
    margin: 0 auto;
  }
  .game-iframe {
    width: 100%;
    height: 600px;
    border: none;
    margin-top: 20px;
    border-radius: 12px;
  }
  .meta {
    display: flex;
    gap: 20px;
    margin: 15px 0;
    color: #888;
  }
  .play-button {
    display: inline-block;
    background: #007bff;
    color: white;
    padding: 12px 30px;
    border-radius: 25px;
    text-decoration: none;
    margin-top: 20px;
    transition: transform 0.2s;
  }
  .play-button:hover {
    transform: translateY(-2px);
  }
  .loading-spinner {
    /* 复用首页加载动画样式 */
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 20px auto;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .error {
    text-align: center;
    color: #888;
    font-size: 18px;
    margin-top: 30px;
  }
  </style>