import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'  //@代表的是src目录在build=>webpack.base.conf.js里配置
import Find from '@/pages/find/Find'
import List from '@/pages/list/List'
import Me from '@/pages/me/Me'
import Login from '@/pages/login/Login'
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name:'Find',
      component: Find
    },
     {
      path: '/list',
      name:'List',
      component: List
    },
     {
      path: '/me',
      name:'Me',
      component: Me
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}

  }
   
})
