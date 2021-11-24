/**
 * @jest-environment jsdom
 */

import { mount } from "@vue/test-utils"
import HelloWorld from '@/components/HelloWorld.vue'

describe('Component-Icon', () => {
  it('HelloWorld Mount DOM Text', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: '你好 世界'
      }
    })
  
    expect(wrapper.find('h1').text()).toBe('你好 世界')
  })
})
