<template>
  <nav class="navbar">
    <!-- <router-link to="/" class="logo">mis</router-link> -->
    <router-link to="/" class="logo">
      <img src="https://www.misgames.site/assets/logo-e-MFXQRF.png" alt="">
    </router-link>
    <div class="nav-menu">
      <span style="cursor: pointer;" v-for="item in menuItems" :key="item.path" @click="goPage(item)" class="nav-menu-item">
        {{ item.name }}
      </span>
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
  { name: 'Home', path: '/',name:'home' },
  { name: 'Disclaimer', path: '/disclaimer' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Sitemap', path: '/sitemap' },
  { name: 'About', path: '/about' },
  // { name: 'GameDetail', path: '/game/:id' }
]);
const router = useRouter();
const route = useRoute();


const goPage = (item) => {

  router.push(item.path);
};

// 处理搜索功能
const handleSearch = debounce((keyword) => {
  console.log('Search keyword:', keyword);

  router.push({
    path: '/',
    query: { ...route.query, search: keyword }
  });
}, 500);
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  /* padding: 1.3rem 4rem; */
  padding: 1.0rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  /* background: #796c6c; */
  @include global.nav-bg-color;
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
}

.nav-menu {
  display: flex;
  box-sizing: border-box;
  /* gap: 3rem; */
  align-items: center;
  margin-left: 20px;
  justify-content: space-between;
  width: 47%;
}

.nav-menu-item {
  // padding: 10px;
  font-size: 19px;
  border-radius: 10%;
  transition: color 0.3s ease;
  // @include global.btn-hover-color;
}

.nav-menu-item:hover {
  @include global.btn-hover-color;
}

/*平板端适配*/
@media (max-width: 1023px) and (min-width: 768px) {
  .navbar {
    padding: 1.0rem 2rem;
  }

  .nav-menu {
    margin-left: 20px;
  }
  .logo img{
    width: 80px;
  }

  // .nav-menu {
  //   flex-direction: column;
  //   align-items: center;
  //   gap: 1rem;
  // }

  .nav-menu-item {
    font-size: 13px;
  }
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

  .nav-menu-item {
    font-size: 16px;
  }
}
</style>