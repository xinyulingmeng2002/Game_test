<template>
  <div class="home">
    <!-- <div> -->
    <!-- <Navbar /> -->
    <!-- <SearchBox /> 添加搜索框组件 -->
    <!-- </div> -->
    <div class="main-container">
      <Sidebar @categoryChange="handleCategoryChange" />
    </div>
    <main class="content">
      <div class="game-grid">
        <GameCard v-for="game in games" :key="game.id" :game="game" />
      </div>
      <div class="load-more-container">
        <button v-if="hasMore && !isLoading" @click="loadMore" class="load-more">
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
const currentCategory = ref('');
const currentPage = ref(1);
const isLoading = ref(false);
const hasMore = ref(true);
const route = useRoute();
const router = useRouter();
const searchQuery = ref('');

// 监听搜索事件
watch(
  () => route.query.search,
  (newSearchQuery) => {
    if (newSearchQuery !== searchQuery.value) {
      searchQuery.value = newSearchQuery;
      searchGames(newSearchQuery);
    }
  }
);

// 加载或分类游戏数据
const loadMore = async () => {
  if (isLoading.value || !hasMore.value) return; // 防止重复加载
  isLoading.value = true;

  try {
    const res = await getGames({
      cid: currentCategory.value,
      pageNum: currentPage.value, // 修改为pageNum
      pageSize: 35,
      category: route.query.category,  // 分类
      title: searchQuery.value // 添加搜索查询
    });

    if (res.data.rows.length === 0) { // 修改为res.data.rows
      hasMore.value = false;
    } else {
      // console.log('Loaded games:', res.data.rows);
      // 只保留最近加载的100个游戏数据，避免数据无限累积
      // games.value = [...games.value.slice(-65), ...res.data.rows]; // 修改为res.data.rows
      games.value = [...games.value.slice(-210), ...res.data.rows]; // 修改为res.data.rows
      currentPage.value++;
    }
  } catch (error) {
    console.error('Error loading games:', error);
  } finally {
    isLoading.value = false;
  }
};


// 搜索游戏
const searchGames = async (query) => {
  if (isLoading.value) return; // 防止重复加载
  isLoading.value = true;
  currentPage.value = 1; // 重置当前页码
  games.value = []; // 清空游戏列表

  try {
    const res = await getGames({
      pageNum: currentPage.value, // 修改为pageNum
      pageSize: 35,
      category: route.query.category,  // 分类
      title: query // 添加搜索查询
    });

    if (res.data.rows.length === 0) { // 修改为res.data.rows
      hasMore.value = false;
    } else {
      console.log('Loaded games:', res.data.rows);
      games.value = res.data.rows; // 修改为res.data.rows
      currentPage.value++;
    }
  } catch (error) {
    console.error('Error loading games:', error);
  } finally {
    isLoading.value = false;
  }
};

// 分类切换处理
const handleCategoryChange = (category, cid) => {
  router.push({
    path: '/',
    query: { category } // 分类参数
  });
  currentCategory.value = cid; // 设置当前分类ID
  currentPage.value = 1; // 重置当前页码
  games.value = []; // 清空游戏列表
  loadMore(); // 加载对应分类数据
};

// 初始加载
onMounted(loadMore);
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  z-index: -1000;
}

.content {
  flex: 1;
  padding: 30px;
  min-width: 0;
  /* 修复flex溢出问题 */
  margin-left: calc(var(--sidebar-width) + 1rem);
  /* 动态计算margin-left */
}

/* 响应式调整 */
@media (max-width: 767px) {
  .home {
    flex-direction: column;
  }

  .content {
    padding: 10px;
    margin-left: 0;
  }
}

/* 游戏网格优化 */
.game-grid {
  display: grid;
  gap: 15px;
  margin-top: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(min(120px, 100%), 1fr));
  /* 修改: 将 min(140px, 100%) 改为 min(100px, 100%) */
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
    margin-left: 70px;
    /* 与侧边栏 width: 150px 保持一致 */
  }
}

/* 平板适配 */
@media (max-width: 1023px) and (min-width: 768px) {
  .content {
    flex: 1;
    padding: 30px;
    min-width: 0;
    /* 修复flex溢出问题 */
    margin-left: calc(var(--sidebar-width) + 10rem);
    /* 动态计算margin-left */
  }

  .load-more,
  .brand-footer {
    margin-left: 0px;
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

/* 防止图片溢出 */
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

/* 弹性盒子改进 */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>