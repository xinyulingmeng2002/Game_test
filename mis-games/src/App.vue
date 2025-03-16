<template>
  <div id="app">
    <Navbar  class="navbar"/>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in"> 
        <component :is="Component" />
      </transition>
    </router-view>
    
  </div>
  
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<!-- <style>
#app {
  min-height: 100vh;
  background: #121212;
  color: white;
}
</style> -->

<style>
.navbar {
  position:fixed;
  top: 0;
}

#app {
  box-sizing: border-box;
  min-height: 100vh;
  background: #121212;
  color: white;
  font-family: 'Poppins', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 桌面端样式 */
@media (min-width: 1024px) {
  .game-grid{ 
    margin-left: 170px; /* 与侧边栏 width: 150px 保持一致 */
  }
}

/* 平板适配 */
@media (max-width: 1023px) and (min-width: 768px) {
  .game-grid{
    margin-left: 0px; /* 与侧边栏 width: 130px 保持一致 */
  }
}

/* 移动端基础字号调整 */
@media (max-width: 767px) {
  .game-grid{
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