<template>
    <div class="sidebar">
      <ul>
        <li 
          v-for="category in categories" 
          :key="category"
          @click="$emit('categoryChange', category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const categories = ["Puzzle", "Casual", "Hot", "Adventure", "Action", "Arcade"];
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background: #2a2a2a;
    padding: 20px;
    color: white;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 10px;
    cursor: pointer;
  }
  li:hover {
    background: #3a3a3a;
  }
  </style>