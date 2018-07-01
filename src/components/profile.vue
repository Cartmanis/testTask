<template>
      <v-container fluid>
          <vue-markdown>
# Профиль
**Гусев Евгений Викторович**
**телефон для связи 8-904-57107-85**
**email: farexy@yandex.ru**
**telegram: @/dev/null**
**skype: farex___**
- Учавствовал в стартапе "Казино", где занимался фронтенд разработкой на Vuejs + Vuex, также настраивал экосистему проекта CI/CD gitlab + Docker DockerRegistry. На данный момент временно вышел из стартапа. (могу дать контакт основателя стартапа)
- Разработал и внедрил в двух организациях электронную очередь клиентов, в которую входят информационные табло с текущей и общей очередью, терминал само записи, и пульт вызова клиента.
Реализовано на следующем:
Бэкенд на Golang (REST service)
Фронтенд на Vuejs
Пульт вызова клиента Electronjs (Сейчас переписываю на C++ и Qt)
Бд Postgresql
deployment Docker container
Вся система работает на Raspberry pi и телевизора в качестве отображения очереди.
Вся работа завязана на WebSocket через REST API к бэкенду.


- Разработал и внедрил Расписание работы врачей
Бекенд на Golang (REST API)
Фронтенд на Vuejs
deployment Docker container

Данную систему интегрировал со сторонней БД, где получаю актуальное расписание.
Вся система работает на Raspberry pi и телевизора

- Разработал ПО автоматической загрузки данных на портал http://nok.rosminzdrav.ru
Программа на Golang которая создавала сессию на портале и загружала необходимые данные.
Портал не предоставлял открытого API для загрузки данных.

- Миграция пользовательских данных с Терминального сервера Windows Server 2008r2
Программа на Golang которая копировала файлы с одного сервера на другой и применяла маски игнорируемых файлов.

- Парсер xml файлов по информации о взаиморасчетам между медицинскими организациями из Терфонда КО
Бэкенд на Golang
Фронтенд Vuejs
БД mongoDB
deployment Docker container

- Также разрабатываю ботов для telegram на golang
          </vue-markdown>
        <v-btn @click="logOut">Выйти из профиля</v-btn>
      </v-container>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'profile',
    components: {
      VueMarkdown
    },
    methods: {
      logOut () {
        window.localStorage.removeItem('login')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
