<style>
    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
</style>


<template>

  <div id="app">

    <site-header></site-header>

    <project-display-container>
        <project-display></project-display>
        <project-display></project-display>
        <project-display></project-display>
    </project-display-container>

  </div>
</template>

<script>
import SiteHeader from './components/site-header.vue'
import ProjectDisplay from './components/project-display.vue'
import ProjectDisplayContainer from './components/project-display-container.vue'

export default {
  data() {
    return {
      msg: 'Hello Vueify'
    }
  },
  components: {
    SiteHeader,
    ProjectDisplay,
    ProjectDisplayContainer
  }
}
</script>
