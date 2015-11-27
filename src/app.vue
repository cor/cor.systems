<template>

  <div id="app">

    <site-header></site-header>
    <project-display></project-display>
    <project-display></project-display>
    <project-display></project-display>

  </div>
</template>

<script>
import SiteHeader from './components/site-header.vue'
import ProjectDisplay from './components/project-display.vue'

export default {
  data() {
    return {
      msg: 'Hello Vueify'
    }
  },
  components: {
    SiteHeader,
    ProjectDisplay
  }
}
</script>
