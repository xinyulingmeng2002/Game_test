<template>
    <div class="search-box">
      <input 
        type="text" 
        v-model="searchKeyword"
        placeholder="Search games..."
        @input="$emit('search', searchKeyword)"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchKeyword = ref('');
  </script>
  
  <style scoped>
  .search-box input {
    padding: 8px 12px;
    border-radius: 20px;
    border: 1px solid #555;
    background: #333;
    color: white;
  }
  </style>