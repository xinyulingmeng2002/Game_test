<template>
    <nav class="navbar">
      <div class="logo">MisGames</div>
      <ul class="menu">
        <li v-for="category in categories" :key="category">
          <router-link :to="'/category/' + category">{{ category }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const categories = [
    "Puzzle", "Casual", "Hot", "Adventure", "Action", "Arcade"
  ];
  </script>
  
  <style scoped>
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .menu {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }
  </style>
  