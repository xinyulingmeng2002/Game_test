<template>
    <!-- 游戏详情页面的主容器 -->
    <div class="game-detail">
        <!-- v-if 指令，当 loading 为 true 时显示加载动画 -->
        <div v-if="loading" class="loading-spinner"></div>
        <!-- v-else-if 指令，当 loading 为 false 且 game 有值时显示游戏详情内容 -->
        <div v-else-if="game" class="content">
            <!-- 显示游戏标题 -->
            <h2 class="title">{{ game.title }}</h2>
            <!-- 媒体容器，用于包含游戏封面图片和嵌入的游戏 iframe -->
            <div class="media-container">
                <!-- 显示游戏封面图片，使用 :src 绑定图片地址 -->
                <!-- <img :src="game.cover" class="cover" /> -->
                <!-- v-if 指令，当 game.embedUrl 存在时显示嵌入的游戏 iframe -->
                <iframe 
                    v-if="game.embedUrl"
                    :src="game.embedUrl"
                    class="game-iframe"
                ></iframe>
            </div>
            <!-- 游戏元信息容器，显示评分和玩家数量 -->
            <div class="meta">
                <!-- 显示游戏评分 -->
                <!-- <div class="rating">⭐ {{ game.rating || '4.5' }}</div> -->
                <!-- 显示游戏玩家数量 -->
                <!-- <div class="players">👥 {{ game.players || 0 }}</div> -->
            </div>
            <!-- 显示游戏描述 -->
            <p class="description">{{ game.description }}</p>
            <!-- 游戏游玩按钮，点击后跳转到游戏链接 -->
            <a :href="game.url" class="play-button">Play Now</a>
            <!-- 推荐游戏列表 -->
            <div v-if="recommendedGames.length" class="recommended-games">
              <h2>Recommended Games</h2>
              <div class="game-list">
                <GameCard 
                  v-for="game in recommendedGames" 
                  :key="game.id" 
                  @click="() => $router.push({ name: 'GameDetail', params: { id: game.id } })"
                  :game="game" 
                />
                <!-- :to="{ name: 'GameDetail', params: { id: game.id } }"  -->
               
              </div>
            </div>
            
        </div>
        <!-- v-else 指令，当 loading 为 false 且 game 为空时显示错误信息 -->
        <div v-else class="error">Game not found</div>
    </div>
</template>

<script setup>
// 从 Vue 核心库中导入 ref, onMounted 和 watch函数
import { ref, onMounted, watch } from 'vue';
// 从 vue-router 中导入 useRoute 函数，用于获取当前路由信息
import { useRoute } from 'vue-router';
// 从自定义的 API 模块中导入获取游戏详情的函数
import { getGameDetails } from '../api/games';
import { getGames } from '../api/games'; // 引入 getGames 函数
import GameCard from '../components/GameCard.vue'; // 引入 GameCard 组件

// 使用 useRoute 函数获取当前路由信息
const route = useRoute();
// 使用 ref 创建响应式变量 game，初始值为 null
const game = ref(null);
// 使用 ref 创建响应式变量 loading，初始值为 true，表示正在加载
const loading = ref(true);
// 使用 ref 创建响应式变量 recommendedGames，初始值为空数组
const recommendedGames = ref([]);


// defineProps({ // 定义接收的父组件传递的参数
//   game: Object
// });

// 获取随机游戏的方法
const getRandomGames = async () => {
    try {
        const res = await getGames(); // 获取所有游戏列表
        const games = res.data.rows; // 假设返回的游戏列表在 res.data.rows 中

        if (games.length > 0) {
            const randomGames = getRandomSample(games, 10); // 随机选取 10 个游戏
            console.log('Random games:', randomGames);
            recommendedGames.value = randomGames;
            console.log('Recommended games:', recommendedGames.value);
        } else {
            console.warn('No games available to recommend.');
            recommendedGames.value = []; // 如果没有游戏，则清空推荐列表
        }
    } catch (error) {
        console.error('Error loading random games:', error);
        // 提供用户友好的错误处理
        recommendedGames.value = []; // 清空推荐列表
        alert('Failed to load random games. Please try again later.'); // 可选：通知用户
    }
};

// 使用 Fisher-Yates 洗牌算法生成随机样本
const getRandomSample = (array, count) => {
    const shuffled = array.slice(); // 创建副本以避免修改原数组
    let i = shuffled.length;
    while (i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 交换元素
    }
    return shuffled.slice(0, count); // 返回指定数量的随机样本
};

// onMounted 钩子函数，在组件挂载到 DOM 后执行
onMounted(async () => {
    try {
        const res = await getGameDetails(route.params.id);
        console.log(res.data);
        game.value = {
            id: res.data.data.id,
            title: res.data.data.title,
            cover: res.data.data.cover,
            embedUrl: res.data.data.gurl, // 修改为gurl
            // rating: res.data.data.rating || '4.5', // 假设rating在数据中不存在
            // players: res.data.data.players || 0, // 假设players在数据中不存在
            description: res.data.data.descr, // 修改为descr
            url: res.data.data.gurl // 添加游戏链接
        };
        console.log(game.value);
    } catch (error) {
        console.error('Error loading game details:', error);
    } finally {
        loading.value = false;
    }
    getRandomGames(); // 获取随机游戏
});

// 监听路由参数的变化
watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      loading.value = true;
      try {
        const res = await getGameDetails(newId);
        console.log(res.data);
        game.value = {
          id: res.data.data.id,
          title: res.data.data.title,
          cover: res.data.data.cover,
          embedUrl: res.data.data.gurl, // 修改为gurl
        //   rating: res.data.data.rating || '4.5', // 假设rating在数据中不存在
        //   players: res.data.data.players || 0, // 假设players在数据中不存在
          description: res.data.data.descr, // 修改为descr
          url: res.data.data.gurl // 添加游戏链接
        };
        console.log(game.value);
      } catch (error) {
        console.error('Error loading game details:', error);
      } finally {
        loading.value = false;
      }
      getRandomGames(); // 获取随机游戏
    }
  },
  { immediate: true } // 立即执行一次
);

</script>

<style scoped>
/* 游戏详情页面主容器样式 */
.game-detail {
    /* 最大宽度为 1200px */
    max-width: 1200px;
    /* 水平居中 */
    margin: 0 auto;
    margin-top: 4rem;
    /* 内边距为 30px */
    padding: 30px;
}
/* 媒体容器样式 */
.media-container {
    /* 相对定位 */
    position: relative;
    /* 上下外边距为 20px */
    margin: 10px 0;
}
/* 游戏封面图片样式 */
.cover {
    /* 宽度为 100% */
    /* width: 1000%; */
    /* 最大宽度为 800px */
    max-width: 200px;
    /* 圆角半径为 12px */
    border-radius: 12px;
    /* 块级元素并水平居中 */
    display: block;
    margin: 0 auto;
}
/* 嵌入游戏的 iframe 样式 */
.game-iframe {
    /* 宽度为 100% */
    width: 100%;
    /* 高度为 600px */
    height: 600px;
    /* 无边框 */
    border: none;
    /* 上外边距为 20px */
    margin-top: 20px;
    /* 圆角半径为 12px */
    border-radius: 12px;
}
/* 游戏元信息容器样式 */
.meta {
    /* 使用 Flexbox 布局 */
    display: flex;
    /* 元素之间的间距为 20px */
    gap: 20px;
    /* 上下外边距为 15px */
    margin: 15px 0;
    /* 文字颜色为 #888 */
    color: #888;
}
/* 游戏游玩按钮样式 */
.play-button {
    /* 行内块级元素 */
    display: inline-block;
    /* 背景颜色为 #007bff */
    background: #007bff;
    /* 文字颜色为白色 */
    color: white;
    /* 内边距为上下 12px，左右 30px */
    padding: 12px 30px;
    /* 圆角半径为 25px */
    border-radius: 25px;
    /* 去除下划线 */
    text-decoration: none;
    /* 上外边距为 20px */
    margin-top: 20px;
    /* 过渡效果，持续时间为 0.2 秒 */
    transition: transform 0.2s;
}
/* 游戏游玩按钮悬停样式 */
.play-button:hover {
    /* 向上移动 2px */
    transform: translateY(-2px);
}
/* 加载动画样式 */
.loading-spinner {
    /* 行内块级元素 */
    display: inline-block;
    /* 宽度为 24px */
    width: 24px;
    /* 高度为 24px */
    height: 24px;
    /* 边框颜色为 #f3f3f3 */
    border: 2px solid #f3f3f3;
    /* 顶部边框颜色为 #3498db */
    border-top: 2px solid #3498db;
    /* 圆角半径为 50%，形成圆形 */
    border-radius: 50%;
    /* 应用 spin 动画，持续时间为 1 秒，线性变化，无限循环 */
    animation: spin 1s linear infinite;
    /* 水平居中 */
    margin: 20px auto;
}
/* 定义 spin 动画 */
@keyframes spin {
    /* 动画开始时旋转 0 度 */
    0% {
        transform: rotate(0deg);
    }
    /* 动画结束时旋转 360 度 */
    100% {
        transform: rotate(360deg);
    }
}
/* 错误信息样式 */
.error {
    /* 文字居中 */
    text-align: center;
    /* 文字颜色为 #888 */
    color: #888;
    /* 字体大小为 18px */
    font-size: 18px;
    /* 上外边距为 30px */
    margin-top: 30px;
}

.recommended-games {
    margin-top: 40px;
    padding: 20px;
    background: #222;
    border-radius: 8px;
}

.recommended-games h2 {
    color: white;
    margin-bottom: 20px;
}

.game-list {
    display: flex;
    overflow-x: auto; /* 启用水平滚动 */
    gap: 10px;
    width: 100%; /* 确保容器宽度为 100% */
}

.game-list::-webkit-scrollbar {
    height: 8px;
}

.game-list::-webkit-scrollbar-track {
    background: #333;
}

.game-list::-webkit-scrollbar-thumb {
    background: #555;
}

.game-list::-webkit-scrollbar-thumb:hover {
    background: #777;
}
</style>