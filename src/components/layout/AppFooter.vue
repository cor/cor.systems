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

  border-bottom: 4px solid $gray;

  @media (prefers-color-scheme: dark) {
    color: $light-gray;
    border-color: $light-gray;
  }
}
</style>
