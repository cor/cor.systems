<template>
<div class="project-info">
  <h3>{{ project.title }}</h3>
  <p class="project-date">{{project.type}}, {{project.date}}</p>
  <p class="project-description">{{ project.description }} </p>
  <div class="technology-badge" v-for="technology in project.technologies" :key="technology">{{technology}}</div>
  <p class="contributors-line"><i>{{ contributors }}</i></p>
  <p class="project-link" v-if="projectLink"><a :href="projectLink">View {{ project.githubPage }} on GitHub</a></p>
  <p class="external-link" v-for="externalLink in project.externalLinks" :key="externalLink.title"><a :href="externalLink.link">{{externalLink.title}}</a></p>
</div>
</template>

<script>
export default {
  props: ['project'],
  computed: {
    projectLink () {
      return this.project.githubPage ? `https://github.com/${this.project.githubPage}` : null
    },
    contributors () {
      // Generates a contributors mention, such as 'Made in cooperation with Nikola Tesla and Thomas Edison'
      if (this.project.contributors) {
        let contributorSentence = 'Made in cooperation with '
        const contributorCount = this.project.contributors.length

        // Iterate over all contributors
        for (let i = 0; i < contributorCount; i++) {
          const contributor = this.project.contributors[i]
          contributorSentence += contributor

          // There are more contributors, determine if this is the secondth last contributor
          if (i + 1 < contributorCount) {
            if (i + 2 === contributorCount) {
              // This is the secondth last contributor, add ' and ',
              contributorSentence += ' and '
            } else {
              // This is not the secondth last contributor, add ", "
              contributorSentence += ', '
            }
          }
        }
        contributorSentence += '.'

        return contributorSentence
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
h3, .project-date {
  display: inline-block;
}

.project-date {
  margin: 0;
  font-size: 15px;
  font-style: italic;
}

.contributors-line {
  font-size: 16px;
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
  margin: 4px 8px 4px 0;
  border-radius: 4px;
  &:first-of-type {
    margin-left: 0;
  }
}

.project-link, .external-link{
  margin-top: 0;
  font-size: 18px;
  margin-bottom: 4px;
}
</style>
