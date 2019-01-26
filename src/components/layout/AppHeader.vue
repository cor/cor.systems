<template>
<div class="app-header">
  <router-link to="/"><h1>CorCoder</h1></router-link>
  <span class="subtitle">Developer</span>
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

  a, a:visited {
    color: $eerie-black;
    text-decoration: none;
  }
}
</style>
