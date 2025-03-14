<template>
  <nav class="navbar">
    <router-link to="/" class="logo">mis</router-link>
    <div class="nav-menu">
      <router-link to="/disclaimer">Disclaimer</router-link>
      <router-link to="/privacy-policy">Privacy Policy</router-link>
      <router-link to="/sitemap">Sitemap</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <SearchBox @search="handleSearch" />
  </nav>
</template>

<script setup>
import SearchBox from './SearchBox.vue';

const handleSearch = (keyword) => {
  // 触发父组件搜索逻辑
  emit('search', keyword);
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a1a;
  gap: 2rem;
}
.logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
}
.nav-menu {
  display: flex;
  gap: 1.5rem;
}
.nav-menu a {
  color: #ccc;
  text-decoration: none;
}
.nav-menu a:hover {
  color: white;
}
</style>