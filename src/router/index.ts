import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'
import LocalStorage from '@/lib/LocalStorage';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{title:"Home"}
    },
    {
      path:'/login',
      name:'login',
      component:() => import('../views/pages/Login.vue'),
      meta:{title:"Login"}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.title != undefined){
    const localStorage = new LocalStorage();
    const token = localStorage.get('token');
    if(token == null){
      if(to.name != 'login'){
        next('/login')
      }else{
        next()
      }
    }
  }
})

export default router
