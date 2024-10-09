import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import LoginPage from '@/components/auth/LoginComponent.vue';
import RegisterComponent from '@/components/auth/RegisterComponent.vue'
import DashboardPage from '@/components/DashboardComponent.vue';
import ScannerComponent from '@/components/scanner/ScannerComponent.vue'
import UserProfile from '@/components/profile/UserProfile.vue'
import ScanResult from '@/components/scanner/ScanResult.vue'
import ElectronicProduct from '@/components/electronic-product/ElectronicProduct.vue'
import ElectronicProductDetails from '@/components/electronic-product/ElectronicProductDetails.vue'
import ReportAnEvent from '@/components/report/ReportAnEvent.vue'
import SelectByProduct from '@/components/where-to-buy-product-in-difficulty/WhereToGetProductDifficulty.vue'
import SelectProductToBuy from '@/components/where-to-buy-product-in-difficulty/SelectByProduct.vue'
import ComminSoon from '@/shared/components/ComingSoon.vue'
import Blog from '@/components/blogs/layout/BlogLayout.vue'
import BlogUpdates from '@/components/blogs/BlogUpdates.vue';
import BlogDetails from '@/components/blogs/BlogDetails.vue';
import AdverseReaction from  '@/components/report/AdverseReaction.vue'
import MapView from  '@/components/where-to-buy-product-in-difficulty/MapView.vue'



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
            { path: 'scanning', name: 'Scanning', component: ScannerComponent, meta: { requiresAuth: true } },
            { path: 'electronic-product', name: 'electronic-product', component: ElectronicProduct, meta: { requiresAuth: true } },
            { path: 'electronic-product-details/:type', name: 'electronic-product-details', component: ElectronicProductDetails, meta: { requiresAuth: true } },
            { path: 'select-product-to-buy', name: 'select-product-to-buy', component: SelectProductToBuy, meta: { requiresAuth: true } },
            { path: 'getProduct', name: 'getProduct', component: SelectByProduct, meta: { requiresAuth: true } },
            { path: 'report', name: 'report', component: ReportAnEvent, meta: { requiresAuth: true } },
            { path: 'adverse-reaction', name: 'adverseReaction', component: AdverseReaction, meta: { requiresAuth: true } },
            { path: 'map-view', name: 'mapView', component: MapView, meta: { requiresAuth: true } },

            { path: 'profile', name: 'Profile', component: UserProfile, meta: { requiresAuth: true } },
        ],
    },
    {
        path: '/comingsoon',
        name: 'comingsoon',
        component: ComminSoon, // No layout for the login page
    },

    // public routes
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
        path: '/',
        component: Blog,
        children: [
            { path: 'blog', name: 'blog', component: BlogUpdates, meta: { requiresAuth: false } },
            {path: '/blog/:id',name: 'BlogDetail',component: BlogDetails},
        ] // No layout for the login page
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
