<template>
  <div class="home">
    <Sidebar @categoryChange="fetchGamesByCategory" />
    <main class="games-container">
      <div class="game-grid">
        <GameCard v-for="game in games" :key="game.id" :game="game" />
      </div>
      <button @click="loadMoreGames" class="load-more">加载更多</button>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import GameCard from '../components/GameCard.vue';
import Sidebar from '../components/Sidebar.vue';

const games = ref([]);
const page = ref(1);

const fetchGamesByCategory = async (category) => {
  page.value = 1;
  games.value = [];
  await loadMoreGames(category);
};

const loadMoreGames = async (category = '') => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/games?page=${page.value}&category=${category}`);
    games.value.push(...data);
    page.value++;
  } catch (error) {
    console.error("获取游戏数据失败:", error);
  }
};

onMounted(() => {
  loadMoreGames();
});
</script>

<style scoped>
.games-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

.load-more {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
