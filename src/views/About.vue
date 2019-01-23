<template>
  <text-page>
    <h2>Projects</h2>
    <p>This page is still in production, all other projects will be added shortly.</p>

    <project-info v-for="project in projects" :key="project.title" :project="project"/>

  </text-page>
</template>

<style lang="scss" scoped>
h3 {
  display: inline-block;
}
.project-date {
  display: inline-block;
}
</style>

<script>
import TextPage from '@/components/layout/TextPage.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'
import projects from '@/projects.json'

export default {
  name: 'About',
  components: { TextPage, ProjectInfo },
  data () {
    return {
      projects: projects
    }
  }
}
</script>
