import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import SingleProject from './pages/SingleProject.vue';
import AppNotFound from './pages/AppNotFound.vue';
import AppContactUs from './pages/AppContactUs.vue';
import AppProjects from './pages/AppProjects.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/contacs',
            name: 'contactus',
            component: AppContactUs
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router };
