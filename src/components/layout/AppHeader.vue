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

  border-top: 4px solid $raspberry-pink;
  border-radius: 0;

  .subtitle {
    margin-top: -10px;
  }

  a, a:visited {
    color: inherit;
    text-decoration: none;
  }

}
</style>
