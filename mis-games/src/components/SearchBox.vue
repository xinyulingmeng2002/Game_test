<template>
    <div class="search-box">
      <input 
        type="text" 
        v-model="searchKeyword"
        placeholder="Search games..."
        @input="handleSearch"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { debounce } from 'lodash-es'; // 需安装：npm install lodash-es
  
  const emit = defineEmits(['search']);
  const searchKeyword = ref('');

  // 搜索框输入时触发防抖函数
  const handleSearch = debounce(() => {
    emit('search', searchKeyword.value.trim());
  }, 300);
  
  // 组件卸载时取消防抖
  import { onUnmounted } from 'vue';
  onUnmounted(() => {
    handleSearch.cancel();
  });
  </script>
  
  <style scoped>
  .search-box {
  margin: 0 20px;
  flex: 1;
  max-width: 400px;
  }
  .search-box input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 20px;
    border: 2px solid #555;
    background: #333;
    color: white;
    transition: all 0.3s;
  }
  .search-box input:focus {
  border-color: #00ff88;
  box-shadow: 0 0 8px rgba(0, 255, 136, 0.3);
  }
  </style>