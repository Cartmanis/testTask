import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: []
  },
  mutations: {
    setNews (state, n) {
      state.news = state.news.concat(n)
    }
  },
  getters: {
    getNews: state => {
      return state.news
    },
    getOneNews: (state) => (id) => {
      return state.news[id]
    }
  }
})
