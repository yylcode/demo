import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'  //@代表的是src目录在build=>webpack.base.conf.js里配置
import City from '@/pages/city/City'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name:'City',
      component: City
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}

  }
})
