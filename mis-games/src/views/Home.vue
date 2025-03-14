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
const isLoading = ref(false);

// 加载更多游戏
const loadMoreGames = async (category = '') => {
  isLoading.value = true;
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/games?page=${page.value}&limit=12&category=${category}`
    );
    games.value.push(...data);
    page.value++;
  } catch (error) {
    console.error("加载失败:", error);
  } finally {
    isLoading.value = false;
  }
};

// 切换分类
const fetchGamesByCategory = async (category) => {
  page.value = 1;
  games.value = [];
  await loadMoreGames(category);
};

onMounted(() => {
  loadMoreGames();
});
</script>

<style scoped>
.home {
  display: flex;
}
.games-container {
  flex-grow: 1;
  padding: 20px;
}
.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}
.load-more {
  margin-top: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.load-more:disabled {
  background: #cccccc;
}
</style>