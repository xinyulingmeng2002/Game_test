<template>
  <div class="search-box">
    <input 
      type="text" 
      v-model="searchQuery" 
      @input="handleSearch" 
      placeholder="Search games..."
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useEmitter } from '../components/useEmitter'; // 修改为正确的相对路径

const searchQuery = ref('');
const emitter = useEmitter();

const handleSearch = () => {
  emitter.emit('search', searchQuery.value);
};
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
