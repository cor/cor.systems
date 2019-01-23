<template>
  <text-page>
    <h2>Projects</h2>
    <p>This page is still in production, all other projects will be added shortly.</p>

    <h3>swift-canvas</h3>
    <p class="project-date">June 2014</p>
    <p>A small drawing program written in Swift playgrounds that uses emoji to render simple geometric drawings.</p>
    <p><a href="https://github.com/cor/swift-canvas">View on GitHub</a></p>

    <h3>TicTacoToe</h3>
    <p class="project-date">February 2014</p>
    <p>This is my oldest project on GitHub, and thus the first project I made using a source control system. It's a console based Tic Tac Toe game written in Java.</p>
    <p><a href="https://github.com/cor/tictacotoe">View on GitHub</a></p>

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

export default {
  name: 'About',
  components: { TextPage }
}
</script>
