import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
        path: '/',
        component: Home,
        meta: { requiresRefresh: true },
        beforeEnter: (to, from, next) => {
            console.log('即将进入首页');
            next();
        }
    },
    {
        path: '/game/:id',
        component: () =>
            import ('../views/GameDetail.vue'),
        props: true
    },
    {
        path: '/disclaimer',
        component: () =>
            import ('../views/Disclaimer.vue'),
        props: true
    },
    {
        path: '/privacy-policy',
        component: () =>
            import ('../views/PrivacyPolicy.vue'),
        props: true
    },
    {
        path: '/about',
        component: () =>
            import ('../views/About.vue'),
        props: true
    },
    {
        path: '/sitemap',
        component: () =>
            import ('../views/Sitemap.vue'),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 添加平滑滚动和强制位置重置
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        return { top: 0, behavior: 'smooth' };
    }
});

export default router;