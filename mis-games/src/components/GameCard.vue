<template>
  <!-- router-link 包裹整个卡片，实现路由跳转 -->
  <router-link 
    :to="'/game/' + game.id"  
    class="game-card"         
    @mouseenter="isHovered = true"  
    @mouseleave="isHovered = false"
  >
    <!-- 图片容器，用于包裹封面图 -->
    <div class="image-container">
      <!-- 游戏封面图片 -->
      <img 
        :src="game.cover"       
        :alt="game.title"       
        loading="lazy"          
        :class="{ 'hover-effect': isHovered }"  
      />
    </div>
    
    <!-- 游戏信息容器 -->
    <div class="game-info">
      <!-- 游戏标题 -->
      <h3 class="title">{{ game.title }}</h3>
      
      <!-- 元数据容器，显示分类和评分 -->
      <div class="meta">
        <!-- 游戏分类 -->
        <span class="category">{{ game.category }}</span>
        <!-- 游戏评分，默认值为 4.5 -->
        <span class="rating">⭐ {{ game.rating || '4.5' }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
// 导入 Vue 的响应式工具
import { ref } from 'vue';   

// 定义组件接收的 props
defineProps({
  game: Object  //接收一个 Object 类型的 game 对象
});

// 定义响应式变量，控制悬停状态
const isHovered = ref(false);
</script>

<style scoped>
/* 游戏卡片基础样式 */
.game-card {
  display: block;          /* 块级元素，确保占据整个容器 */
  background: #333;        /* 背景色为深灰色 */
  border-radius: 8px;      /* 圆角边框 */
  overflow: hidden;        /* 隐藏溢出内容 */
  text-decoration: none;   /* 去除下划线 */
  transition: transform 0.3s ease;  /* 悬停时的平滑过渡效果 */
}

/* 悬停时卡片上移 5px */
.game-card:hover {
  transform: translateY(-5px);
}

/* 图片容器样式，保持 16:9 比例 */
.image-container {
  position: relative;      /* 相对定位，方便子元素绝对定位 */
  padding-top: 56.25%;     /* 16:9 比例计算：9/16*100% = 56.25% */
  overflow: hidden;        /* 隐藏溢出内容 */
}

/* 图片样式 */
img {
  position: absolute;      /* 绝对定位，填满容器 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;       /* 保持宽高比并填充容器 */
  transition: transform 0.3s ease;  /* 悬停时的平滑过渡效果 */
}

/* 悬停时图片放大 5% */
img.hover-effect {
  transform: scale(1.05);
}

/* 游戏信息容器样式，内边距 */
.game-info {
  padding: 12px;
}

/* 标题样式，白色文字，较小字号 */
.title {
  color: white;
  font-size: 14px;
  margin: 0 0 8px;        /* 底部 margin */
}

/* 元数据样式，Flex 布局，两端对齐 */
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #888;            /* 深灰色文字 */
}
</style>