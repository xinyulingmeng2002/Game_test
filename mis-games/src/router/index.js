import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import GameDetail from '../views/GameDetail.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/game/:id', component: GameDetail }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;