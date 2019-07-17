<template>
  <v-app>
    <v-toolbar app color="green" dark flat>
      <v-toolbar-title class="headline text-uppercase">
        <span>TFT</span>
        <span class="font-weight-light">COMPOSITION</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
     <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
