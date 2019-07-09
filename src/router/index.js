import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// import LogIn from '@/views/log-in.vue'
const login = r => require.ensure([], () => r(require('@/views/login.vue')));
const home = r => require.ensure([], () => r(require('@/views/home.vue')));
const wodebaoming = r => require.ensure([], () => r(require('@/views/wodebaoming.vue')));
const account = r => require.ensure([], () => r(require('@/views/account.vue')));
const details = r => require.ensure([], () => r(require('@/views/details.vue')));
const baomingbiao = r => require.ensure([], () => r(require('@/views/baomingbiao.vue')));
const wodejiaofei = r => require.ensure([], () => r(require('@/views/wodejiaofei.vue')));
const zaixianbaoming = r => require.ensure([], () => r(require('@/views/zaixianbaoming.vue')));
const confirm = r => require.ensure([], () => r(require('@/views/confirm.vue')));
const login_others = r => require.ensure([], () => r(require('@/views/login_others.vue')));
const login_phone = r => require.ensure([], () => r(require('@/views/login_phone.vue')));
const pfind = r => require.ensure([], () => r(require('@/views/pfind.vue')));
// const LogIn = r => require.ensure([], () => r(require('@/views/log-in.vue')))
const register = r => require.ensure([], () => r(require('@/views/register.vue')));
const payrecord = r => require.ensure([], () => r(require('@/views/payrecord.vue')));
const imagesList = r => require.ensure([], () => r(require('@/views/images-list.vue')));
const test = r => require.ensure([], () => r(require('@/views/test.vue')))
const routes = [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: login
  }, {
    path: '/images-list',
    component: imagesList
  }, {
    path: '/home',
    component: home
  }, {
    path: '/wodebaoming',
    component: wodebaoming
  },{
    path: '/account',
    component: account
  },{
    path: '/details',
    component: details
  },{
    path: '/baomingbiao',
    component: baomingbiao
  },{
    path: '/wodejiaofei',
    component: wodejiaofei
  },{
    path: '/zaixianbaoming',
    component: zaixianbaoming
  },{
    path: '/register',
    component: register
  },{
    path: '/payrecord',
    component: payrecord
  },{
    path: '/confirm',
    component: confirm
  },{
    path: '/login_others',
    component: login_others
  },{
    path: '/login_phone',
    component: login_phone
  },{
    path: '/test',
    component: test
  },{
    path: '/pfind',
    component: pfind
  },
]
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (1===1)next()
  
})
export default router
