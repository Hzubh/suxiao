//createRouter：创建router实例对象
//createWebhistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Logins/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from  '@/views/Home/index.vue'
import Category from  '@/views/Category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import cartlist from '@/views/Cartlist/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path:'/',
        component:Layout,
        children:[
        {
          path:'',
          component:Home
        },
        {
          path:'category/:id',
          component:Category
        },
        {
          path:'category/sub/:id',
          component:subCategory
        },
        {
          path:'detail/:id',
          component:Detail
        },
        {
          path:'cartlist',
          component:cartlist
        }
    ]
    },
    {
        path:'/login',
        component:Login
    }
  ],
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
