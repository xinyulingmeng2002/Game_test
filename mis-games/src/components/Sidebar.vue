<template>
    <div class="sidebar">
      <div 
        v-for="category in categories" 
        :key="category.name"
        class="category-item"
        @click="$emit('categoryChange', category.name)"
      >
        <img :src="category.icon" class="icon" />
        <span>{{ category.name }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  const categories = [
    { name: 'Puzzle', icon: '/src/assets/icons/puzzle.svg' },
    { name: 'Kids', icon: '/src/assets/icons/kids.svg' },
    { name: 'Featured', icon: '/src/assets/icons/featured.svg' },
    { name: 'Casual', icon: '/src/assets/icons/casual.svg' },
    { name: 'Hot', icon: '/src/assets/icons/hot.svg' },
    { name: 'Adventure', icon: '/src/assets/icons/adventure.svg' }
  ];
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    padding: 1rem;
    background: #2a2a2a;
  }
  .category-item {
    display: flex;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    color: #ccc;
  }
  .category-item:hover {
    background: #3a3a3a;
  }
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
  </style>