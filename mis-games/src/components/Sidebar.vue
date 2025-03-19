<template>
  <div class="sidebar">
    <div v-for="category in categories" :key="category.name" class="category-item"
      :class="{ active: selectedCategory === category.name }" @click="selectCategory(category.name)">
      <img :src="category.icon" class="icon" />
      <span>{{ category.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { getGameCf } from '../api/games';
const categories = ref([]);


// onMounted 钩子函数，在组件挂载到 DOM 后执行
onMounted(async () => {
  console.log("onMounted")
    try {
        const { data} = await getGameCf();
        const icos = 'https://admin.towsgames.site';
        categories.value = data.data.map(item=>{
          return {
            ...item,
            icon: `${icos}${item.ico}`,
            cid: item.id
          }
        })
        console.log(data.data);
        console.log(categories.value);
    } catch (error) {
        console.error('Error loading game details:', error);
    }
});

const selectedCategory = ref('');
const emit = defineEmits(['categoryChange']);

const selectCategory = (category) => {
  selectedCategory.value = category; // 更新选中分类
  const selectedPage = categories.value.find(cat => cat.name === category)?.cid || 1;
  emit('categoryChange', category, selectedPage); // 触发分类改变事件并传递类别
};
</script>

<style scoped lang="scss">
.sidebar {
  height: 100vh;
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
  // background: #3a3a3a;
  @include global.btn-hover-color;
}

.category-item.active {
  // background: #007bff;
  @include global.btn-active-color;
  color: white;
}

.icon {
  margin-right: 10px;
}

/* 桌面端样式 */
@media (min-width: 1024px) {
  .sidebar {
    height: 100%;
    position: fixed;
    padding: 1rem;
    margin-top: 4.7rem;
    @include global.bg-color;

  }

  .category-item {
    padding: 6px;
    margin-bottom: 25px;
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
    position: fixed;
    padding: 5rem 1rem 1rem 1rem;
    @include global.bg-color;
  }

  .category-item {
    padding: 11px;
    margin-bottom: 0px;
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
    @include global.bg-color;
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
    margin-top: 12.8rem;
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