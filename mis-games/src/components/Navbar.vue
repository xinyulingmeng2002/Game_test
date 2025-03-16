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
    <slot>
      <SearchBox @search="handleSearch" />
    </slot>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import SearchBox from './SearchBox.vue';

const menuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Disclaimer', path: '/disclaimer' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Sitemap', path: '/sitemap' },
  { name: 'About', path: '/about' }
]);

const router = useRouter();
const route = useRoute();

// handleSearch搜索处理
const handleSearch = (keyword) => {
  console.log('Search keyword:', keyword);

  router.push({
    path: '/',
    query: { ...route.query, search: keyword }
    });
};
</script>

<style scoped>
.navbar {
  /* 固定导航栏 */
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  position: fixed;
  gap: 2rem;
  /* background: #1a1a1a; */
  background: #796c6c;
  z-index: 1000;
}
.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 40px;
  color: white;
}
.nav-menu {
  display: flex;
  margin-left: 90px;
  gap: 2.5rem;
}
.nav-menu a {
  color: #ccc;
  text-decoration: none;
}
.nav-menu a:hover {
  color: white;
}
</style>
