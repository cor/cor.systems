<template>
  <text-page>
    <h2>Projects</h2>
    <p>These are (almost) all projects I worked on. Some of them are personal, others were made for my study, and others are professional projects. The older the project, the worse the code is, but each project contributed to my programming experience and learning process.</p>

    <div class="filters">
      <div class="filters-header">
        <button @click="showFilters = !showFilters"
                :class="{'toggle-filters-button': true, 'filters-are-shown': showFilters}">
                Filter projects
        </button>
        <span class="filter-status" v-show="filteringIsEnabled">{{filterStatus}}</span>
      </div>

      <div class="filter-container" v-show="showFilters">
        <div class="filter">
          <input type="checkbox" id="filters-professional-checkbox" v-model="filters.professional.enabled">
          <label for="filters-professional-checkbox">Only show professional projects</label>
        </div>
        <div class="filter">
          <input type="checkbox" id="filters-open-source-checkbox" v-model="filters.openSource.enabled">
          <label for="filters-open-source-checkbox">Only show open source projects</label>
        </div>
      </div>
    </div>

    <div class="projects">
      <project-info v-for="project in filteredProjects" :key="project.title" :project="project"/>
    </div>
  </text-page>
</template>

<script>
import TextPage from '@/components/layout/TextPage.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'
import projects from '@/projects.json'

export default {
  name: 'Projects',
  components: { TextPage, ProjectInfo },
  data () {
    return {
      projects: projects,
      showFilters: false,
      filters: {
        professional: {
          enabled: false,
          filter: p => p.type === 'Professional'
        },
        openSource: {
          enabled: false,
          filter: p => p.githubPage
        }
      }
    }
  },
  computed: {
    filteredProjects () {
      // Returns a filter's filter function if it is enabled,
      // otherwise returns a function which always returns true
      function applyIfEnabled (filter) {
        if (filter.enabled) { // Filter is enabled, return the filter's filter function
          return p => filter.filter(p)
        } else { // Filter is disabled, return a function which always returns true
          return p => true
        }
      }

      // Apply all enabled filters
      return this.projects
        .filter(applyIfEnabled(this.filters.professional))
        .filter(applyIfEnabled(this.filters.openSource))
    },
    filteringIsEnabled () {
      return this.filters.professional.enabled || this.filters.openSource.enabled
    },
    filterStatus () {
      return `${this.filteredProjects.length}/${this.projects.length} are shown`
    }
  }
}
</script>

<style lang="scss" >

// Spacing between projects
.project-info {
  margin-top: 40px;
  &:first-child {
    margin-top: 10px;
  }
}

.filters {
  $filters-border-radius: 4px;

  margin-top: 20px;

  .toggle-filters-button {
    background-color: $light-gray;
    color: $white;
    border: none;
    border-radius: $filters-border-radius;
    padding: 2px 8px 0 8px;
    font-family: 'Teko';
    font-size: 16px;
    cursor: pointer;
    outline: inherit;
    display: inline-block;
    margin: 0;

    &.filters-are-shown {
      border-radius: $filters-border-radius $filters-border-radius 0 0;
    }
  }

  .filter-status {
    display: inline-block;
    color: $gray;
    font-weight: bold;
    font-size: 14px;
    margin-left: 8px;
  }

  .filter-container {
    display: inline-flex;
    flex-direction: column;
    border: 2px solid $light-gray;
    border-radius: 0 $filters-border-radius $filters-border-radius $filters-border-radius;
    padding: 12px 16px 14px 10px;

    label {
      color: $gray;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      letter-spacing: normal;
      margin-left: 2px;
    }
  }
}

</style>
