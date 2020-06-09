//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

//1.通过Vue.use（插件），安装插件
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: () => import('@/views/home.vue'),
    children: [{
      path: 'userlist',
      component: () => import('@/views/user/userlist.vue'),
    }]
  }]
})




//3.导出router
export default router