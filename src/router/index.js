import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login/login'
import News from '@/components/news'
import NewsLearMore from '@/components/news_lear_more'
import Profile from '@/components/profile'

Vue.use(Router)

const routes = [
  {path: '/', component: Index},
  {path: '/login', component: Login},
  {path: '/news', component: News},
  {path: '/news/:id', component: NewsLearMore},
  {path: '/profile', component: Profile, meta: {requiresAuth: true}}
]

const router = new Router({routes, mode: 'history'})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('login'))
    // Если пользователь не авторизован, перемещаем его на страницу /login //
    if (!authUser) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
  next()
})

export default router
