import { mount } from '@vue/test-utils'
import hello from '../docs/.vuepress/components/hello.vue'

// 判断是不是一个组件
describe('hello', () => {
    const wrapper = mount(hello)
    test('是一个vue实例', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    // 测试加法
    // test('加法的计算结果', () => {
    //     expect(wrapper.vm.add(1,2)).toBe(3)
    // })
    //
    // // 测试减法
    // test('减法的计算结果', () => {
    //     expect(wrapper.vm.reduce(6,3)).toEqual(3)
    // })
})
