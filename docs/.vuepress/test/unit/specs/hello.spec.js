import Vue from 'vue'
import { expect } from 'chai';
import  hello from '../../../components/hello'
import {mount, createLocalVue, shallowMount} from '@vue/test-utils'

// 测试hello组件
describe('hello.vue', () => {
    it('should render correct contents', () => {
        const wrapper = shallowMount(hello)
        let content = wrapper.vm.$el.querySelector('.content').textContent
        expect(content).to.equal('Hello Kitty')
    })
})
