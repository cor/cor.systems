<template>
<div id="app">
  <app-header/>
  <app-content>
    <router-view/>
  </app-content>
  <app-footer/>
</div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppContent from '@/components/layout/AppContent'
import AppFooter from '@/components/layout/AppFooter'
export default {
  name: 'App',
  components: { AppHeader, AppContent, AppFooter }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Teko:400,700');
@import '@/global.scss';

html {
  box-sizing: border-box;
}
body {
  margin: 0;
}
*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $eerie-black;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
h1 {
  font-family: 'Teko'
}
</style>
