import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import SingleProject from './pages/SingleProject.vue';
import AppNotFound from './pages/AppNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router };
