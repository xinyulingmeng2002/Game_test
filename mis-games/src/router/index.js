import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import GameDetail from '../views/GameDetail.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresRefresh: true }, // 添加 meta 标签
        beforeEnter: (to, from, next) => {
            console.log('即将进入首页');
            next();
        }
    },
    {
        path: '/game/:id',
        name: 'GameDetail',
        component: GameDetail,
        meta: { requiresRefresh: true } // 添加 meta 标签
    },
    {
        path: '/disclaimer',
        component: () =>
            import ('../views/Disclaimer.vue'),
        props: true,
        meta: { requiresRefresh: true } // 添加 meta 标签
    },
    {
        path: '/privacy-policy',
        component: () =>
            import ('../views/PrivacyPolicy.vue'),
        props: true,
        meta: { requiresRefresh: true } // 添加 meta 标签
    },
    {
        path: '/about',
        component: () =>
            import ('../views/About.vue'),
        props: true,
        meta: { requiresRefresh: true } // 添加 meta 标签
    },
    {
        path: '/sitemap',
        component: () =>
            import ('../views/Sitemap.vue'),
        props: true,
        meta: { requiresRefresh: true } // 添加 meta 标签
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

// 添加导航守卫，用于强制刷新组件
router.beforeEach((to, from, next) => {
    if (to.meta.requiresRefresh) {
        console.log('即将进入页面，强制刷新组件');
        console.log(to);
        console.log(from);
        console.log(to.matched);
        // 强制刷新组件
        try {
            to.matched.forEach(record => {
                if (record.instances.default) {
                    record.instances.default.$forceUpdate();
                }
            });
        } catch (error) {
            console.error('强制刷新组件时出现错误:', error);
        }
    }
    next();
});

export default router;