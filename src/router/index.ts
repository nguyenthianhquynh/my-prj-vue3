import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/layouts/afterLoginLayout.vue'),
      children:[{
        path:'',
        meta: { title: "Home" },
        name:'home',
        component: () => import('../views/pages/HomeView.vue'),
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
          component: () => import('../views/pages/LoginPage.vue')
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
        //next('/login')
        next()
      }else{
        next()
      }
    }
  else{
    next()
  }
})


export default router
