<template>
  <div class="sidebar">
    <div 
      v-for="category in categories" 
      :key="category.name"
      class="category-item" 
      :class="{ active: selectedCategory === category.name }" 
      @click="selectCategory(category.name)"
    >
      <img :src="category.icon" class="icon" />
      <span>{{ category.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
  { name: 'Puzzle', icon: new URL('../assets/icons/puzzle.svg', import.meta.url).href, page: 1 },
  { name: 'Kids', icon: new URL('../assets/icons/kids.svg', import.meta.url).href, page: 2 },
  { name: 'Featured', icon: new URL('../assets/icons/featured.svg', import.meta.url).href, page: 3 },
  { name: 'Casual', icon: new URL('../assets/icons/casual.svg', import.meta.url).href, page: 4 },
  { name: 'Hot', icon: new URL('../assets/icons/hot.svg', import.meta.url).href, page: 5 },
  { name: 'Adventure', icon: new URL('../assets/icons/adventure.svg', import.meta.url).href, page: 6 },
  { name: 'Girl', icon: new URL('../assets/icons/adventure.svg', import.meta.url).href, page: 7 },
  { name: 'Sports', icon: new URL('../assets/icons/adventure.svg', import.meta.url).href, page: 8 },
  { name: 'Action', icon: new URL('../assets/icons/adventure.svg', import.meta.url).href, page: 9 },
  { name: 'Arcade', icon: new URL('../assets/icons/adventure.svg', import.meta.url).href, page: 10 },
  { name: 'Racing', icon: new URL('../assets/icons/adventure.svg', import.meta.url).href, page: 11 },
  // 添加更多分类和页码
]);

const selectedCategory = ref('');
const emit = defineEmits(['categoryChange']);

const selectCategory = (category) => {
  selectedCategory.value = category; // 更新选中分类
  const selectedPage = categories.value.find(cat => cat.name === category)?.page || 1;
  emit('categoryChange', category, selectedPage); // 触发分类改变事件并传递页码
};
</script>

<style scoped>
.sidebar {
  background: #858585;
  transition: all 0.3s ease;
}

.category-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ccc;
  border-radius: 6px;
  white-space: nowrap;  
  overflow: hidden; 
  text-overflow: ellipsis; 
}

.category-item:hover {
  background: #3a3a3a;
}

.category-item.active {
  background: #007bff;
  color: white;
}

.icon {
  margin-right: 10px;
}

/* 桌面端样式 */
@media (min-width: 1024px) {
  .sidebar {
    /* width: 160px; */
    height: 100%;
    position: fixed;
    padding: 1rem;
    /* margin-left: 8px; */
    margin-top: 4.8rem;
    background: #535252;
  }
  .category-item {
    padding: 6px;
    margin-bottom: 18px;
  }
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
}

/* 平板适配 */
@media (max-width: 1023px) and (min-width: 768px) {
  .sidebar {
    width: 130px;
    height: 100%;
    padding: 1rem;
    margin-left: 7px;
    background: #4a4949;
  }
  .category-item {
    padding: 11px;
    margin-bottom: 8px;
  }
  .icon {
    width: 22px;
    height: 22px;
  }
}

/* 移动端适配 */
@media (max-width: 767px) {
  .sidebar {
    /* display: flex; */
    height: auto;
    position: relative;
  }
  .sidebar-inner {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px;
  }
  .category-item {
    flex: 1 0 45%; 
    max-width: 100px;
    flex-direction: column;
    text-align: left;
    padding: 8px;
  }

  .category-item:first-child {
    margin-top: 14rem;
  }
  .category-item:last-child {
    margin-bottom: 0;
  }
  .icon {
    width: 11px;
    height: 11px;
  }
}
</style>