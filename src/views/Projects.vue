<template>
  <text-page>
    <h2>Projects</h2>
    <p>These are (almost) all projects I worked on. Some of them are personal, others were made for my study, and others are professional projects. The older the project, the worse the code is, but each project contributed to my programming experience and learning process.</p>
    <p><i>This page is still under construction, and will be updated shortly.</i></p>

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
