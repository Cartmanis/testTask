<template>
    <v-card>
      <v-container>
        Мой профиль
      </v-container>
      <v-btn @click="logOut">Выйти из профиля</v-btn>
    </v-card>
</template>

<script>
    export default {
      name: 'profile',
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
