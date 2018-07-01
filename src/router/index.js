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
    if (!authUser) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
  metaControl(to, from, next)
})

function metaControl (to, from, next) {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.meta_tags)
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
  if (!nearestWithMeta) return next()

  nearestWithMeta.meta.meta_tags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  }).forEach(tag => document.head.appendChild(tag))
  next()
}

export default router
