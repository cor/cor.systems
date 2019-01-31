<template>
  <div class="app-footer">&copy; {{year}} Cor Pruijs</div>
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
.app-footer {
  padding: 16px;
  text-align: center;
  font-size: 15px;

  color: $gray;
  font-weight: bold;
}
</style>
