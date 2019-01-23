<template>
  <text-page>
    <h2>Projects</h2>

    <h3>swift-convas</h3>
    <p><i>June 2014</i></p>
    <p>A small drawing program written in Swift playgrounds that uses emoji to render simple geometric drawings.</p>

    <h3>TicTacoToe</h3>
    <p><i>February 2014</i></p>
    <p>This is my oldest project on GitHub, and thus the first project I made using a source control system. It's a console based Tic Tac Toe game written in Java.</p>
  </text-page>
</template>

<script>
import TextPage from '@/components/layout/TextPage.vue'

export default {
  name: 'About',
  components: { TextPage }
}
</script>
