<template>
  <v-container>
     <vue-markdown>
# Тестовое задание для React-разработчика

**Тестовое задание №1 - Средний уровень**

**Задача**

Реализовать приложение, которое умеет показывать следующие страницы:

- / — главная
- /login — страница ввода логина и пароля
- /news — страница со списком новостей (из любого новостного сервиса)
- /news/{id\_новости} - страница с контентом выбранной новости
- /profile — страница с текстом о вас, возможно резюме, недоступная без авторизации

На сайте, в шапке или подвале реализовать ссылки:

- На главную (/)
- Новости (/news)
- Профиль (/profile)

Если пользователь кликает на страницу &quot;профиля&quot; и он не &quot;авторизован&quot; — перекидывать на страницу /login

Форма входа (/login) принимает &quot;фейковые&quot; данные:

username: Admin
password: 12345

Если введены другие данные, то показывается сообщения:

- Имя пользователя или пароль введены не верно
- Если введены корректные данные, то перебрасывать на страницу /profile

Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false. Базу данных реализовать не нужно.

Все необходимое на ваш взгляд, прокинуть через Redux/Mobx(рекомендуется).

Оформление (дизайн) — не важно. Сделайте, чтобы можно было комфортно смотреть пример в браузере.

Большим плюсом будет реализация пагинации

**Условия**

Код оформить на GitHub с толковым Readme.md (описанием), ссылку прислать в telegram **@AlexanderTK** , в письме укажите ваш опыт работы с данными технологиями и с какими проблемами столкнулись.

Если у вас не получается сделать часть задания, то присылайте решение все равно, указывая что именно не вышло и почему.

     </vue-markdown>
  </v-container>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'index',
    components: {
      VueMarkdown
    }
  }
</script>

<style scoped>

</style>
