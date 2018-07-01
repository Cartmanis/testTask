<template>

  <v-container>
    <v-flex xs12 sm6 offset-sm3>
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
              <v-btn @click="back"> назад</v-btn>
            </div>
          </v-card-title>
        </v-card>
        <br />
    </v-flex>

  </v-container>

</template>

<script>
  import {store} from '../store/strore'
  export default {
    name: 'news_lear_more',
    computed: {
      news () {
        return store.getters.getOneNews(this.$route.params.id)
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
