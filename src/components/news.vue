/* eslint-disable */
<template>

  <v-container>
    <v-layout>
       <v-flex xs12 sm6 offset-sm3>
        <template v-for="(news, index) in itemsNews">
          <v-card>

            <v-card-media :src="news.urlToImage" height="200px"></v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">
                  {{news.title}}
                  </h3>
                </div>
                <div>
                  {{news.description}}
                </div>
                <div>
                  <v-btn @click="more(index)"> Подробнее</v-btn>
                </div>
              </v-card-title>

          </v-card>
          <br />
      </template>
        <v-pagination
          v-model="page"
          :length="itemsNews.length / 2"
          @input="next"
          visible="3"
          circle
        ></v-pagination>

    </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import {store} from '../store/strore'
  import * as controllers from '../controllers'
  export default {
    data () {
      return {
        count: 3,
        page: 1,
        tempItem: []
      }
    },
    computed: {
      itemsNews () {
        return store.getters.getNews
      }
    },
    watch: {
      count () {
        return this.itemsNews.slice(1, 3)
      }
    },
    mounted: function () {
      if (store.getters.getNews.length === 0) {
        this.setItemsNewsDefault()
      }
    },
    methods: {
      next () {
        this.count += 1
      },
      setItemsNewsDefault () {
        controllers.getNews().then(function (resopnse) {
          if (resopnse.status === 200) {
            store.commit('setNews', resopnse.data.articles)
          }
        }).catch(function (error) {
          console.log(error)
        })
      },
      more (index) {
        this.$router.push('/news/' + index)
      }
    }
  }
</script>
