<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <Navbar />
    
    <!-- 路由视图容器 -->
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
/* 全局基础样式 */
#app {
  min-height: 100vh;
  background: #121212;
  color: white;
  font-family: Arial, sans-serif;
}
</style>