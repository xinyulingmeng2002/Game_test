<template>
  <div id="app">
    <!-- <Navbar /> -->
    <Navbar class="navbar" />   
    
    <router-view v-slot="{ Component }">
        <component :is="Component" />
      <!-- <transition name="fade" mode="out-in"> 
        <component :is="Component" />
      </transition> -->
    </router-view>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
}


/* 全局样式 */
#app {
  box-sizing: border-box;
  min-height: 100vh;
  /* background: #121212; */
  @include global.bg-app-color;
  color: white;
  font-family: 'Poppins', sans-serif;
}

/* 渐变动画 */
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: -1;
} */

/* 桌面端样式 */
@media (min-width: 1024px) {
  :root {
    --sidebar-width: 70px;
  }
  .game-grid { 
    margin-left: var(--sidebar-width); /* 使用CSS变量 */
  }
}

/* 平板适配 */
@media (max-width: 1023px) and (min-width: 768px) {
  :root {
    --sidebar-width: 0px;
  }
  .game-grid {
    margin-left: var(--sidebar-width); /* 使用CSS变量 */
  }
}

/* 移动端基础字号调整 */
@media (max-width: 767px) {
  :root {
    --sidebar-width: 0px;
  }
  .game-grid {
    margin-left: var(--sidebar-width); /* 使用CSS变量 */
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