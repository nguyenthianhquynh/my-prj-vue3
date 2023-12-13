import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/layouts/afterLoginLayout.vue'),
      children:[{
        path:'',
        name:'home',
        component:HomeView,
        meta:{title:"Home"}
      }]
    },
    {
      path:'/login',
      component:() => import('../views/layouts/loginLayout.vue'),
      children:[
        {
          path:"",
          meta: { title: "Login" },
          name: 'login',
          component: () => import('../views/pages/Login.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const cookies = document.cookie.split('; ');
  if(cookies.length <= 0){
    next('/login')
  }
  
  const logged_in = cookies.find(data => data.startsWith("logged_in"));
  const isLogged = logged_in?.split('=')[1];
  if (isLogged == undefined || isLogged == 'false'){
      if(to.name != 'login'){
        next('/login')
      }else{
        next()
      }
    }
  else{
    next()
  }
})


export default router
