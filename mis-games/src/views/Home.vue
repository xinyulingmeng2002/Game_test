<template>
  <div class="home">
    <Navbar>
      <SearchBox @search="handleSearch" />
    </Navbar>
    
    <div class="main-container">
      <Sidebar @categoryChange="handleCategoryChange" />
    </div>
    <main class="content">
      <div class="game-grid">
        <GameCard 
          v-for="game in games" 
          :key="game.id" 
          :game="game" 
        />
      </div>
      <div class="load-more-container">
        <button 
          v-if="hasMore && !isLoading"
          @click="loadMore"
          class="load-more"
        >
          Load More
        </button>
        <div v-if="isLoading" class="loading-spinner"></div>
        <div v-if="!hasMore" class="no-more">No more games~</div>
      </div>
      
      <footer class="brand-footer">
        www.misgames.site is brand of misgames.site
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getGames } from '../api/games';
import GameCard from '../components/GameCard.vue';
import Sidebar from '../components/Sidebar.vue';

const games = ref([]);
const currentPage = ref(1);
const isLoading = ref(false);
const hasMore = ref(true);
const route = useRoute();
const router = useRouter();

// 加载游戏数据
const loadMore = async () => {
  if (isLoading.value || !hasMore.value) return;
  isLoading.value = true;

  try {
    const res = await getGames({
      page: currentPage.value,
      limit: 12,
      category: route.query.category
    });

    if (res.data.length === 0) {
      hasMore.value = false;
    } else {
      games.value = [...games.value, ...res.data];
      currentPage.value++;
    }
  } catch (error) {
    console.error('Error loading games:', error);
  } finally {
    isLoading.value = false;
  }
};

// 分类切换处理
const handleCategoryChange = (category) => {
  router.push({ 
    path: '/',
    query: { category }
  });
};

// 监听路由变化
watch(() => route.query, () => {
  games.value = [];
  currentPage.value = 1;
  hasMore.value = true;
  loadMore();
});

// 初始加载
onMounted(loadMore);
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  min-width: 0; /* 修复flex溢出问题 */
}

/* 响应式调整 */
@media (max-width: 767px) {
  .home {
    flex-direction: column;
  }
  .content {
    padding: 10px;
  }
}

/* 游戏网格优化 */
.game-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
}

/* 加载按钮优化 */
.load-more {
  width: 100%;
  max-width: auto;
  margin: 20px auto;
  padding: 12px 24px;
  background: #9090b5;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.load-more:hover {
  opacity: 0.8;
}

/* 防止加载按钮溢出 */ 
.load-more-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
}

.no-more {
  color: #888;
  font-size: 14px;
}

/* 加载失败提示 */
.error {
  text-align: center;
  color: #888;
  font-size: 18px;
}


/* 加载中动画 */
.loading-spinner {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.brand-footer {
  margin-top: 10px;
  text-align: center;
  color: #888;
}

/* 桌面端样式 */
@media (min-width: 1024px) {
  .load-more,
  .brand-footer { 
    margin-left: 170px; /* 与侧边栏 width: 150px 保持一致 */
  }
}

/* 平板适配 */
@media (max-width: 1023px) and (min-width: 768px) {
  .load-more,
  .brand-footer {
    margin-left: 130px; /* 与侧边栏 width: 130px 保持一致 */
  }
}

/* 移动端基础字号调整 */
@media (max-width: 767px) {
  .load-more,
  .brand-footer {
    margin-left: 0;
  }
  html {
    font-size: 14px;
  }
}
</style>