/**
 * @author https://github.com/daviscai
 * @date 2017/08/14
 * @description 路由配置页
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import map from './map'

Vue.use(VueRouter)

let router = new VueRouter({
  // mode: 'history',
  // mode: 'abstract',
  routes: map
})

Vue.$router = router

export default router
