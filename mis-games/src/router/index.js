import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/game/:id', component: () =>
            import ('../views/GameDetail.vue') },
    { path: '/disclaimer', component: () =>
            import ('../views/Disclaimer.vue') },
    { path: '/privacy-policy', component: () =>
            import ('../views/PrivacyPolicy.vue') },
    { path: '/about', component: () =>
            import ('../views/About.vue') },
    { path: '/sitemap', component: () =>
            import ('../views/Sitemap.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    }
});

export default router;