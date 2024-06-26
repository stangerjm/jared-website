import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/meet-jared',
      name: 'meet',
      component: () => import('../views/MeetJared.vue'),
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/JaredBooks.vue'),
    },
    {
      path: '/newsletter',
      name: 'newsletter',
      component: () => import('../views/NewsletterSignup.vue'),
    },
    {
      path: '/schoolvisits',
      name: 'schoolvisits',
      component: () => import('../views/EducatorGuide.vue'),
    },
    {
      path: '/extras',
      name: 'extras',
      component: () => import('../views/AboutExtras.vue'),
    },
    {
      path: '/parents',
      name: 'parents',
      component: () => import('../views/ParentsForm.vue'),
    },
  ],
});

export default router;
