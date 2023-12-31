import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseInput from './MessageInput.vue'

describe('base component test', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('./MessageInput.vue')
    expect(cmp).toBeDefined()
  })

  test('mount component', async () => {
    expect(BaseInput).toBeTruthy()

    const wrapper = mount(BaseInput, {
      props: {
        label: 'Test Label'
      }
    })
    expect(wrapper.text()).toContain('Test Label')
  })
})