import { mount } from '@vue/test-utils'
import Contact from '@/views/Contact.vue'

describe('Contact.vue', () => {
  const wrapper = mount(Contact)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('includes the email address', () => {
    expect(wrapper.html()).toContain('<a href="mailto:cor@pruijs.nl">cor@pruijs.nl</a>')
  })

  it('contains a header', () => {
    expect(wrapper.contains('h2')).toBeTruthy()
  })
})
