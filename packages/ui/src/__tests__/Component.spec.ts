import { mount } from '@vue/test-utils'
import UIButton from '../UIButton.vue'

describe('Sample Test Suite', () => {
  it('mounts', () => {
    const wrapper = mount(UIButton, {
      props: {
        message: 'Test in Jest',
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
