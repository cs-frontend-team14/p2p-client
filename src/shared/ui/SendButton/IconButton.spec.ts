import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconButton from './IconButton.vue'

describe('base component test', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('./IconButton.vue')
    expect(cmp).toBeDefined()
  })

  test('mount component', async () => {
    expect(IconButton).toBeTruthy()

    const wrapper = mount(IconButton, {
      props: {
        icon: 'Test Button'
      }
    })
    expect(wrapper.text()).toContain('Test Button')
  })
})