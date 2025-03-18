<template>
  <nav class="navbar">
    <!-- <router-link to="/" class="logo">mis</router-link> -->
    <router-link to="/" class="logo">
      <img src="https://www.misgames.site/assets/logo-e-MFXQRF.png" alt="">
    </router-link>
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
import { debounce } from 'lodash-es';

const menuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Disclaimer', path: '/disclaimer' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Sitemap', path: '/sitemap' },
  { name: 'About', path: '/about' },
  // { name: 'GameDetail', path: '/game/:id' }
]);
const router = useRouter();
const route = useRoute();

// 处理搜索功能
const handleSearch = debounce((keyword) => {
  console.log('Search keyword:', keyword);

  router.push({
    path: '/',
    query: { ...route.query, search: keyword }
  });
}, 500);
</script>

<style scoped>
.navbar {
  width: 100%;
  /* padding: 1.3rem 4rem; */
  padding: 1.0rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: #796c6c;
  z-index: 1000;
}

/* .logo {
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: white;
} */

.logo img {
  width: 100px;
  height: 100x;
  /* border-radius: 50%; */
}

.nav-menu {
  display: flex;
  gap: 3rem;
}

.nav-menu a {
  color: #ccc;
  text-decoration: none;
  font-size: 19px; 
  transition: color 0.3s ease;  
}

.nav-menu a:hover {
  color: white;
}

/* 移动端适配 */
@media (max-width: 767px) {
  .logo {
    font-size: 20px;
  }
  .nav-menu {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .nav-menu a {
    font-size: 16px;
  }
}
</style>