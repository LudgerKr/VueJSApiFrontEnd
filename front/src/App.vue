<template>
  <v-app>
    <v-content :class="$style.mainBG">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
  import './assets/custom.scss'

  // Install BootstrapVue
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" module>
  .mainBG {
    background: rgb(76,94,94);
    background: linear-gradient(90deg, rgba(76,94,94,1) 0%, rgba(138,170,170,1) 100%);
  }
</style>