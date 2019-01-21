<template>
<div class="app-header">
  <h1>CorCoder</h1>
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
@import '@/global.scss';

.app-header {
  border-bottom: 1px solid $eerie-black;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 8px;
    margin-top: 16px;
  }
}
a {
  margin: 8px;
}
</style>
