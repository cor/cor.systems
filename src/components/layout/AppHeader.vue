<template>
<div class="AppHeader">
    <h1>CorCoder</h1>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
</div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="scss">
a {
  margin: 8px;
}

</style>
