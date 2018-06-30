import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import News from '@/components/news'
import NewsLearMore from '@/components/news_lear_more'

Vue.use(Router)

const routes = [
  {path: '/', component: Index},
  {path: '/news', component: News},
  {path: '/news/:id', component: NewsLearMore}
]

const router = new Router({
  routes, mode: 'history'
})

export default router
