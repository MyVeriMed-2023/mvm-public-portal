import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import LoginPage from '@/components/auth/LoginComponent.vue';
import RegisterComponent from '@/components/auth/RegisterComponent.vue'
import DashboardPage from '@/components/DashboardComponent.vue';
import ScannerComponent from '@/components/scanner/ScannerComponent.vue'
import UserProfile from '@/components/profile/UserProfile.vue'
import ScanResult from '@/components/scanner/ScanResult.vue'

const routes = [
    {
        path: '/',
        redirect: '/login', // Redirect root URL to login
    },
    { path: '/scan-result', name: 'ScanResult', component: ScanResult },

    {
        path: '/',
        component: MainLayout, // Apply layout to these routes
        children: [
            { path: 'dashboard', name: 'Dashboard', component: DashboardPage, meta: { requiresAuth: true } },
            { path: 'scanning', name: 'Scanning', component: ScannerComponent, meta: { requiresAuth: false } },
            { path: 'profile', name: 'Profile', component: UserProfile, meta: { requiresAuth: true } },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage, // No layout for the login page
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: RegisterComponent, // No layout for the login page
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/login', // Redirect unknown routes to home
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
