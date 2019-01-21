<template>
<div class="navigation">
  <router-link to="/">home</router-link>
  <router-link to="/about">about</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/global.scss';

.navigation {
  a {
    font-family: 'Teko';
    font-size: 20px;
    font-weight: bold;
    color: $raspberry-pink;
    margin: 0 8px;
  }
}
</style>
