import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import { before } from 'lodash-es'; 

const routes = [{
        path: '/',
        component: Home,
        meta: { requiresRefresh: true }, // 添加元信息 
        //路由独享守卫
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
            }
        }
        return { top: 0, behavior: 'smooth' }
    }
});

// // 添加全局前置守卫
// router.beforeEach((to, from, next) => {
//     // 这里可以进行一些验证操作，比如检查用户是否登录
//     const isLoggedIn = localStorage.getItem('isLoggedIn'); // 假设使用 localStorage 存储登录状态
//     if (to.meta.requiresAuth && !isLoggedIn) {
//         // 如果路由需要登录且用户未登录，重定向到登录页
//         next('/login');
//     } else {
//         // 允许导航
//         next();
//     }
// });


export default router;