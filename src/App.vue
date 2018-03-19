<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~normalize.css/normalize";
@import url("https://fonts.googleapis.com/css?family=Bitter:400,400i,700");

* {
  color: $main-color;
  border: 1px solid $main-color;
  border-width: 0;
}

h1 {
  margin: 0;
  margin-top: -16px;
  font-size: 72px;
}

h2 {
  margin-top: -10px;
  margin-bottom: 2px;
}

p {
  font-size: 18px;
  margin: 0;
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
