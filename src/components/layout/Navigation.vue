<template>
<div class="navigation">
  <router-link to="/">home</router-link>
  <router-link to="/about">about</router-link>
  <router-link to="/cv">cv</router-link>
  <router-link to="/contact">contact</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.navigation {
  a {
    font-family: 'Teko';
    font-size: 20px;
    margin: 0 8px;
  }
}
</style>
