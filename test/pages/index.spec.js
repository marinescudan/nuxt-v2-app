import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm).toBeTruthy()
  })

  test('snapshot', () => {
    const wrapper = mount(Index)
    expect(wrapper.element).toMatchSnapshot()
  })
})
