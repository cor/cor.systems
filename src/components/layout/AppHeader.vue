<template>
<div class="app-header">
  <h1>CorCoder</h1>
  <span class="subtitle">Development</span>
  <navigation></navigation>
</div>
</template>

<script>
import Navigation from '@/components/layout/Navigation.vue'

export default {
  name: 'AppHeader',
  components: { Navigation }
}
</script>

<style scoped lang="scss">

.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;

  .subtitle {
    margin-top: -10px;
  }
}
a {
  margin: 8px;
}
</style>
