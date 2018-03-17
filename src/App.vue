<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Bitter:400,400i,700");

* {
  color: #2c2c2c;
}

h1 {
  font-size: 72px;
  margin: 0;
}

h2 {
  margin-top: -4px;
  margin-bottom: 2px;
}

p {
  font-size: 18px;
  margin-top: 4px;
}

body {
  margin: 0;
  font-family: "Bitter", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
