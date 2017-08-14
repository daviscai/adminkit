/**
 * @author https://github.com/daviscai
 * @date 2017/08/14
 * @description 路由配置页
 */

export default [
  {
    path: '/',
    redirect: {
      path: '/index'
    }
  },
  {
    title: 'index',
    path: '/index',
    component: require('../views/index.vue')
  }

]
