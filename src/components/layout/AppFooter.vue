<template>
  <div>
    <div class="app-footer">
      <p>&copy; {{year}} Cor Pruijs</p>
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
}
</style>
