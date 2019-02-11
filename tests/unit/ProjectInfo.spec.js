import { shallowMount } from '@vue/test-utils'
import ProjectInfo from '@/components/ProjectInfo.vue'

describe('ProjectInfo.vue', () => {
  const wrapper = shallowMount(ProjectInfo, {
    propsData: {
      project: {
        title: 'This website',
        type: 'Professional',
        date: 'January 2019',
        description: "This site is used to showcase who I am and what I've worked on. I generated this project list using a Vue component that parses a projects.json file. This allows users to filter projects and ensures consistent styling.",
        technologies: ['Web', 'Vue.js', 'Vue Router', 'vue-cli', 'SCSS', 'CSS', 'JavaScript', 'WebPack', 'Babel', 'Design', 'HTML', 'Affinity Designer', 'GitHub Pages'],
        githubPage: 'cor/corcoder.com'
      }
    }
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('includes the title', () => {
    expect(wrapper.html()).toContain('<h3>This website</h3>')
  })

  it('includes the date', () => {
    expect(wrapper.html()).toContain('January 2019')
  })

  it('includes a correct project-link', () => {
    expect(wrapper.html()).toContain('<a href="https://github.com/cor/corcoder.com">View cor/corcoder.com on GitHub</a>')
  })
})
