<template>
  <router-link 
    :to="{ name: 'GameDetail', params: { id: game.id } }"     
    class="game-card"         
    @mouseenter="isHovered = true"  
    @mouseleave="isHovered = false" 
  >
    <div class="image-container">
      <img 
        :src="game.cover"       
        :alt="game.title"       
        loading="lazy"          
        :class="{ 'hover-effect': isHovered }"  
      />
    </div>
    <div class="game-info">
      <h3 class="title">{{ game.title }}</h3>
      <div class="meta">
        <!-- <span class="category">{{ game.category }}</span> -->
        <!-- <span class="rating">⭐ {{ game.rating || '4.5' }}</span> -->
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { ref } from 'vue';

defineProps({ // 定义接收的父组件传递的参数
  game: Object
});

const isHovered = ref(false);
</script>

<style scoped>
.game-card {
  display: block;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease;
  width: 80%;
  /* width: 150px;  */
}

.game-card:hover {
  transform: translateY(-5px);
}

.image-container {
  position: relative;
  padding-top: 100%; /* 修改: 将 padding-top 从 56.25% 改为 100% */
  overflow: hidden;
}

img {
  position: absolute;
  top: 0; /* 修改: 添加分号 */
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

img.hover-effect {
  transform: scale(1.05);
}

.game-info {
  padding: 8px;
}

.title {
  color: white;
  font-size: 14px;
  margin: 0 0 8px;
  white-space: nowrap;  
  overflow: hidden; 
  text-overflow: ellipsis; 
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #888;
}
</style>