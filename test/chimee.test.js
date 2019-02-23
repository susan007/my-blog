import {mount} from '@vue/test-utils'
import chimee from '../docs/.vuepress/components/chimee.vue'

describe('chimee组件测试', () => {
    const wrapper = mount(chimee)
    it('测试组件是否ok', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
