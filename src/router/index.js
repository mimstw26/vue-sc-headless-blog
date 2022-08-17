import { createRouter, createWebHistory } from 'vue-router'
import BlogsPage from '../views/BlogsPage.vue';
import Home from "../views/Home.vue";

const routes = [
  {
    path: '/blogs',
    name: 'Blogs',
    component: BlogsPage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: '/blogs'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
