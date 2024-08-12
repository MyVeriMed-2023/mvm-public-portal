import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import LoginPage from '@/components/auth/LoginComponent.vue';
import DashboardPage from '@/components/DashboardComponent.vue';

const routes = [
    {
        path: '/',
        component: MainLayout, // Apply layout to these routes
        children: [
            { path: 'dashboard', name: 'Dashboard', component: DashboardPage, meta: { requiresAuth: true } },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage, // No layout for the login page
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/', // Redirect unknown routes to home
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Replace with actual auth check

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;
