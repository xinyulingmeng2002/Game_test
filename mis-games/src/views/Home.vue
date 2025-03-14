<template>
  <div class="home">
    <Sidebar @categoryChange="handleCategoryChange" />
    <main>
      <div class="game-grid">
        <GameCard 
          v-for="game in games" 
          :key="game.id" 
          :game="game" 
        />
      </div>
      <button 
        @click="loadMore" 
        :disabled="isLoading"
        class="load-more"
      >
        {{ isLoading ? 'Loading...' : 'Load More' }}
      </button>
      <footer class="brand-footer">
        www.misgames.site is brand of misgames.site
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getGames } from '../api/games';
import GameCard from '../components/GameCard.vue';
import Sidebar from '../components/Sidebar.vue';

const games = ref([]);
const currentPage = ref(1);
const isLoading = ref(false);
const hasMore = ref(true);

const loadMore = async () => {
  if (isLoading.value || !hasMore.value) return;
  isLoading.value = true;
  
  try {
    const response = await getGames({
      page: currentPage.value,
      limit: 12
    });
    
    if (response.data.length === 0) {
      hasMore.value = false;
    } else {
      games.value = [...games.value, ...response.data];
      currentPage.value++;
    }
  } catch (error) {
    console.error('Error loading games:', error);
  } finally {
    isLoading.value = false;
  }
};

const handleCategoryChange = (category) => {
  // 重置数据并加载新分类
  games.value = [];
  currentPage.value = 1;
  loadMore();
};

onMounted(loadMore);
</script>

<style scoped>
.home {
  display: flex;
  min-height: 100vh;
}
.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}
.load-more {
  margin: 20px auto;
  padding: 10px 30px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.load-more:disabled {
  background: #555;
  cursor: not-allowed;
}
.brand-footer {
  text-align: center;
  padding: 2rem;
  color: #666;
}
</style>