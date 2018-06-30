<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-items>
        <v-btn flat ripple @click="$router.push('/')">На главную</v-btn>
        <v-btn flat ripple @click="$router.push('/news')">Новости</v-btn>
        <v-btn flat ripple @click='alert()'>Профиль</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  methods: {
    news () {
      this.$router.push('/news')
    }
  },
  name: 'App'
}
</script>
