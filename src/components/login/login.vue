<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>Авторизация</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="auth.login" prepend-icon="person" name="login" label="Имя пользователя" type="text"></v-text-field>
              <v-text-field v-model="auth.password" prepend-icon="lock" name="password" label="Пароль" id="password" type="password"></v-text-field>
              <h4 v-if="error" align="center" style="color: red;">имя пользователя или пароль введены не верно</h4>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="logIn" color="info">Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      error: false,
      auth: {
        login: null,
        passowrd: null
      }
    }),
    methods: {
      logIn () {
        if (this.auth.login === 'Admin' && this.auth.password === '12345') {
          window.localStorage.setItem('login', true)
          this.$router.push('/profile')
        } else {
          this.error = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
