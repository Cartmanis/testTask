<template>

  <v-container>
    <v-flex xs12 sm6 offset-sm3>

        <template v-for="(news, index) in itemsNews">
          <v-card>

            <v-card-media :src="news.urlToImage" height="200px">
            </v-card-media>
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

    </v-flex>

  </v-container>
</template>
<script>
  import {store} from '../store/strore'
  import * as controllers from '../controllers'
  export default {
    data () {
      return {
        // itemsNews: []
      }
    },
    computed: {
      itemsNews () {
        return store.getters.getNews
      }
    },
    mounted: function () {
      if (store.getters.getNews.length === 0) {
        this.setItemsNewsDefault()
      }
    },
    methods: {
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
