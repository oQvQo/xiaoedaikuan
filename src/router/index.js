import Vue from 'vue'
import VueRouter from 'vue-router'

import homePageRoter from './homePage' //首页
import bankLiushuiRoter from './bankLiushui' //财务管理
import productFactoryRoter from './productFactory' //产品工厂
import loansRoter from './loans' //产品工厂
import SystemManagement from './SystemManagement'//系统管理
import EarlyWarning from './EarlyWarning'//贷后预警

// 催收管理
import Cjilu from '../views/Cuishoujilu.vue'
import Daoqi from '../views/Daoqi.vue'
import Yiyuqi from '../views/Yiyuqi.vue'
// 系统权限
import Qxbumen from '../views/Qxbumen.vue'
import Qxjuese from '../views/Qxjuese.vue'
import Qxkefu from '../views/Qxkefu.vue'
import Qxshuju from '../views/Qxshuju.vue'
import Qxyuangong from '../views/Qxyuangong.vue'




Vue.use(VueRouter)

const routes = [
  // 催收管理
  {
    path: '/cjilu',
    name: 'Cjilu',
    component: Cjilu
  },
  {
    path: '/daoqi',
    name: 'Daoqi',
    component: Daoqi
  },
  {
    path: '/yiyuqi',
    name: 'Yiyuqi',
    component: Yiyuqi
  },
  // 系统权限
  {
    path: '/qxbumen',
    name: 'Qxbumen',
    component: Qxbumen
  },
  {
    path: '/qxjuese',
    name: 'Qxjuese',
    component: Qxjuese
  },
  {
    path: '/qxkefu',
    name: 'Qxkefu',
    component: Qxkefu
  },
  {
    path: '/qxshuju',
    name: 'Qxshuju',
    component: Qxshuju
  },
  {
    path: '/qxyuangong',
    name: 'Qxyuangong',
    component: Qxyuangong
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    ...bankLiushuiRoter,
    ...homePageRoter,
    ...productFactoryRoter,
    ...loansRoter,
    ...SystemManagement,
    ...EarlyWarning,
    { path: '/*', redirect: '/homePage' }
  ]
})

export default router
