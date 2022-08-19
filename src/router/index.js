import { createRouter, createWebHistory } from 'vue-router'
import BlogsPage from '../views/BlogsPage.vue';
import Home from "../views/Home.vue";
import BlogDetailPage from "../views/BlogDetailPage.vue"
import NotFoundPage from "../views/NotFoundPage.vue";

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
    path: '/blogs/:id',
    name: 'BlogDetail',
    component: BlogDetailPage
  },
  {
    path: '/',
    redirect: '/blogs'
  },
  // plan on directly navigating to the not-found route using its name
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: NotFoundPage },
  // if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
  { 
    path: '/:pathMatch(.*)', 
    name: 'bad-not-found', 
    component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
