<template>
  <nav class="navbar">
    <router-link to="/" class="logo">mis</router-link>
    <div class="nav-menu">
      <router-link 
        v-for="item in menuItems" 
        :key="item.path" 
        :to="item.path"
      >
        {{ item.name }}
      </router-link>
    </div>
    <!-- <slot></slot> 搜索框插槽 -->
    <SearchBox @search="handleSearch" />
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import SearchBox from './SearchBox.vue';

const menuItems = ref([
  { name: 'Disclaimer', path: '/disclaimer' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Sitemap', path: '/sitemap' },
  { name: 'About', path: '/about' }
]);

const handleSearch = (keyword) => {
  // 触发父组件搜索逻辑
  emit('search', keyword);
};
</script>

<style scoped>
.navbar {
  background: #1a1a1a;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
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