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
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i|Teko:700');
@import "~normalize-scss/sass/normalize";

body {
  margin: 0;
}

// 'box-sizing: border box' on every element, except when specified otherwise.
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $eerie-black;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

// Fonts
h1, h2, h3, h4 {
  font-family: 'Teko', sans-serif;
  margin: 8px 8px -16px 0;
}

h1 {
  font-size: 60px;
}

h2 {
  font-size: 35px;
}

h3 {
  margin-top: 40px;
  font-size: 30px;
}

p {
  font-size: 19px;
  line-height: 1.35;
  margin: 8px 0;
}

a {
  font-family: 'Teko', sans-serif;
  font-weight: bold;
  color: $raspberry-pink;
}
</style>
