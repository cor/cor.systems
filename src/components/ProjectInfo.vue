<template>
<div class="project-info">
  <h3>{{ project.title }}</h3>
  <p class="project-date">{{ project.date }}</p>
  <p class="project-description">{{ project.description }} </p>
  <div class="technology-badge" v-for="technology in project.technologies" :key="technology">{{technology}}</div>
  <p><a :href="projectLink">View on GitHub</a></p>
</div>
</template>

<script>
export default {
  props: ['project'],
  computed: {
    projectLink () {
      return `https://github.com/${this.project.githubPage}`
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  display: inline-block;
}
.project-date {
  display: inline-block;
  margin-bottom: 0;
  font-size: 15px;
}

.project-description {
  margin-top: 0;
}

.technology-badge {
  display: inline-block;
  color: $white;
  font-family: 'Teko', sans-serif;
  background-color: $raspberry-pink;
  padding: 2px 10px 0 10px;
  margin: 0 4px;
  border-radius: 4px;
  &:first-of-type {
    margin-left: 0;
  }
}
</style>
