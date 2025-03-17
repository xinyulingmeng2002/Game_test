<template>
  <div class="home">
    <div>
      <Navbar />
      <!-- <SearchBox /> 添加搜索框组件 -->
    </div>
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
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 30px;
  min-width: 0; /* 修复flex溢出问题 */
  margin-left: calc(var(--sidebar-width) + 1rem); /* 动态计算margin-left */
}

/* 响应式调整 */
@media (max-width: 767px) {
  .home {
    flex-direction: column;
  }
  .content {
    padding: 10px;
    margin-left: 0; /* 移动端不需要margin-left */
  }
}

/* 游戏网格优化 */
.game-grid {
  display: grid;
  gap: 15px;
  margin-top: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(min(140px, 100%), 1fr)); /* 修改: 将 min(210px, 100%) 改为 min(160px, 100%) */
}

/* ... existing code ... */
</style>