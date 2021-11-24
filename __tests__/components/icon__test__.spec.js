/**
 * @jest-environment jsdom
 */

import { mount, shallowMount } from '@vue/test-utils'
import IconFont from '@/components/IconFont/index.vue'

describe('Component-Icon', () => {
  it('Icon shallowMount DOM Class', () => {
    const wrapper = shallowMount(IconFont, {
      props: {
        verticalCenter: true
      }
    })
    expect(wrapper.classes()).toContain("middle")
  })

  it('Icon shallowMount DOM Class', () => {
    const wrapper = shallowMount(IconFont, {
      props: {
        verticalCenter: true
      }
    })
    expect(wrapper.classes()).toContain("icon-font")
  })

  it('Icon shallowMount DOM Class', () => {
    const wrapper = shallowMount(IconFont, {
      props: {
        verticalCenter: false
      }
    })
    expect(wrapper.classes()).toEqual(
      expect.not.arrayContaining(['middle']),
      expect.not.arrayContaining(['middles'])
    )
  })

  it('Icon shallowMount DOM Click', async () => {
    const wrapper = shallowMount(IconFont)

    await wrapper.find('svg').trigger('click')

    expect(wrapper.emitted().click).toHaveLength(2)
  })

  // it('Icon shallowMount DOM Click', async () => {
  //   const wrapper = shallowMount(IconFont)

  //   await wrapper.find('svg').trigger('click')

  //   expect(wrapper.emitted().click[1]).toBe([{isTrusted: false}])
  // })
})