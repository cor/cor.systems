<template>
  <div>
    <div class="app-footer">
      <p><i></i>&copy; {{year}} Cor Pruijs</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="scss">
p {
  margin: 8px;
  text-align: center;
  font-size: 15px
}
</style>
