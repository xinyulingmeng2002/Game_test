import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 路由表配置
const routes = [
    { path: '/', component: Home },
    {
        path: '/game/:id',
        component: () =>
            import ('../views/GameDetail.vue')
    },
    {
        path: '/disclaimer',
        component: () =>
            import ('../views/Disclaimer.vue')
    },
    {
        path: '/privacy-policy',
        component: () =>
            import ('../views/PrivacyPolicy.vue')
    },
    {
        path: '/about',
        component: () =>
            import ('../views/About.vue')
    }
]

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router